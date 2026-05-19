package com.bootcamp.back07.service;

import com.bootcamp.back07.dto.UsuarioResponse;
import com.bootcamp.back07.exception.UsuarioNoEncontradoException;
import com.bootcamp.back07.mapper.UsuarioMapper;
import com.bootcamp.back07.model.Usuario;
import com.bootcamp.back07.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    public final UsuarioRepository usuarioRepository;
    public final UsuarioMapper usuarioMapper;

    public UsuarioService(
            UsuarioRepository usuarioRepository,
            UsuarioMapper usuarioMapper
    ) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }
    public UsuarioResponse obtenerPorEmail(String email) {
        Usuario usuario = usuarioRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new UsuarioNoEncontradoException(
                        "Usuario no encontrado con email " + email
                ));
        return usuarioMapper.toResponse(usuario);

    }
}
