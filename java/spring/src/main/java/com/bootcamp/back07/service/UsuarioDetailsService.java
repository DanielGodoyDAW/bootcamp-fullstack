package com.bootcamp.back07.service;

import com.bootcamp.back07.model.Usuario;
import com.bootcamp.back07.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UsuarioDetailsService implements UserDetailsService {

    public final UsuarioRepository usuarioRepository;

    public UsuarioDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmailIgnoreCase(email).orElseThrow(() -> new UsernameNotFoundException("No se ha encontrado el usuario"));
        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getPassword())
                .disabled(!usuario.isActivo())
                .authorities(
                        usuario.getRoles()
                                .stream()
                                .map(Enum::name)
                                .toArray(String[]::new)
                )
                .build();
    }
}
