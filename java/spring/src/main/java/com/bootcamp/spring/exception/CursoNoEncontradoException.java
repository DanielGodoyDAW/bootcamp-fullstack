package com.bootcamp.spring.exception;

public class CursoNoEncontradoException  extends RuntimeException{
    public CursoNoEncontradoException( String msg){
        super(msg);
    }
}
