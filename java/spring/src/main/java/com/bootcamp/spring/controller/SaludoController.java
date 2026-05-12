package com.bootcamp.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController //le indicamos que un controlador de tipo rest
@RequestMapping("api/saludo")
public class SaludoController {
    @GetMapping
    public String saludar() {
        return "Hola caracola";
    }

    /*
    //para transformar en un json el archivo, con no devolver cadena, lo transforma a json
    @GetMapping("1")
    public Map<String, Object> ups(){
        return Map.of(
                "aplication", "SpringBoot",
                "version", "1",
                "activa",true
        );
    }
     */
}
