package com.bootcamp.back07.exception;

public class CursoNoEncontradoException extends RuntimeException {
    public CursoNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}
