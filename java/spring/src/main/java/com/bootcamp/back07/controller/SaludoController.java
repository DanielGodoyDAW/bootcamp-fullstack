package com.bootcamp.back07.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/saludo")
public class SaludoController {

    @GetMapping("/caracola")
    public String saludar() {
        return "¡Hola, caracola!";
    }
    @GetMapping
    public Map<String, Object> saludoBase() {

        return Map.of("aplication","BACK08","version","1","activa","true");
    }

}
