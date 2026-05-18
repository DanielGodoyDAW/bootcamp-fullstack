package com.bootcamp.back07.mapper;

import com.bootcamp.back07.dto.RegisterRequest;
import com.bootcamp.back07.dto.UsuarioResponse;
import com.bootcamp.back07.model.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {
    public UsuarioResponse toResponse(Usuario usuario) {
        return new UsuarioResponse(
                usuario.getId(),
                usuario.getNombre(),
                usuario.getEmail(),
                usuario.getRoles()
        );
    }
//
//    public Usuario toEntity(RegisterRequest request) {
//        return new Usuario(
//                request.getEmail(),
//                request.getNombre(),
//
//        );
//    }
}
