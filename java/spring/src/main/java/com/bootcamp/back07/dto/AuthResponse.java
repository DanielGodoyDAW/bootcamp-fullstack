package com.bootcamp.back07.dto;

public class AuthResponse {
    private String token;
    private String tokenType;
    private UsuarioResponse usuario;

    public AuthResponse(String token, String tokenType, UsuarioResponse usuario) {
        this.token = token;
        this.tokenType = tokenType;
        this.usuario = usuario;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public UsuarioResponse getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioResponse usuario) {
        this.usuario = usuario;
    }
}
