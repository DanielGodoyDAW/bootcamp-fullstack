package com.bootcamp.spring.exception;

import com.bootcamp.spring.dto.ApiErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;

@RestControllerAdvice // !manejador global de excepciones
public class GlobalExceptionHandler {
    @ExceptionHandler(CursoNoEncontradoException.class) // ? maneja la excepcion de curso no encontrado, se le pasa la clase de la excepcion que queremos manejar
    public ResponseEntity<ApiErrorResponse> manejarCursoNoEncontrado(CursoNoEncontradoException exception, HttpServletRequest request){
         ApiErrorResponse response = new ApiErrorResponse(LocalDateTime.now(),
                 HttpStatus.NOT_FOUND.value(),
                 HttpStatus.NOT_FOUND.getReasonPhrase(),
                 exception.getMessage(),
                 request.getRequestURI(),
                 List.of());
         return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiErrorResponse> manejarArgumentoNoValido(IllegalArgumentException exception, HttpServletRequest request){
        ApiErrorResponse response = new ApiErrorResponse(LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                List.of());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> erroresDeValidacion(MethodArgumentNotValidException exception, HttpServletRequest request){

       List<String> details = exception.getBindingResult()
               .getFieldErrors()
               .stream()
               .map(FieldError::getDefaultMessage)
               .toList();

        ApiErrorResponse response = new ApiErrorResponse(
                LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                details
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
