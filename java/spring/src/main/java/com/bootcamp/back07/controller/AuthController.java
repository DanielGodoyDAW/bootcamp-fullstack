package com.bootcamp.back07.controller;

import com.bootcamp.back07.dto.AuthResponse;
import com.bootcamp.back07.dto.LoginRequest;
import com.bootcamp.back07.dto.RegisterRequest;
import com.bootcamp.back07.dto.UsuarioResponse;
import com.bootcamp.back07.service.AuthService;
import com.bootcamp.back07.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final UsuarioService usuarioService;

    public AuthController(
            AuthService authService,
            UsuarioService usuarioService
    ) {
        this.authService = authService;
        this.usuarioService = usuarioService;
    }

    @PostMapping("/register")
    public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @GetMapping("/me")
    public UsuarioResponse me(Authentication authentication) {
        return usuarioService.obtenerPorEmail(
                authentication.getName()
        );
    }
}
