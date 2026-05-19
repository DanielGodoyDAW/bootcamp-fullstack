package com.bootcamp.back07.exception;

public class UsuarioNoEncontradoException extends RuntimeException {
    public UsuarioNoEncontradoException(String message){
        super(message);
    }
}
