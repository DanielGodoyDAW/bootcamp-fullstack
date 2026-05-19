package com.bootcamp.back07.service;

import com.bootcamp.back07.config.PasswordConfig;
import com.bootcamp.back07.dto.AuthResponse;
import com.bootcamp.back07.dto.LoginRequest;
import com.bootcamp.back07.dto.RegisterRequest;
import com.bootcamp.back07.enums.Rol;
import com.bootcamp.back07.exception.EmailYaRegistradoException;
import com.bootcamp.back07.mapper.UsuarioMapper;
import com.bootcamp.back07.model.Usuario;
import com.bootcamp.back07.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.Email;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AuthService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UsuarioMapper usuarioMapper;
    private final AuthenticationManager authenticationManager;


    public AuthService(UsuarioRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, UsuarioMapper usuarioMapper, AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.usuarioMapper = usuarioMapper;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (repository.existsByEmail(request.getEmail())) {
            throw new EmailYaRegistradoException("El email ya se ha registradao");
        }
        Usuario usuario = new Usuario(
          request.getNombre(),
          request.getEmail(),
          passwordEncoder.encode(request.getPassword()),
                Set.of(Rol.ROLE_USER)
        );
        Usuario entity = repository.save(usuario);
        String token = jwtService.generarToken(usuario);
        return new AuthResponse(
          token, "Bearer",
          usuarioMapper.toResponse(entity)
        );
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken.unauthenticated(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        Usuario usuario = repository.findByEmailIgnoreCase(request.getEmail()).orElseThrow();
        String token = jwtService.generarToken(usuario);
        return new AuthResponse(
          token,
          "Bearer",
          usuarioMapper.toResponse(usuario)
        );
    }
}
