package com.bootcamp.back07.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequest {

    @Email(message = "El correo debe tener el formato correcto")
    @NotBlank(message = "El correo no puede estar vacío")
    private String email;

    @Size(min = 8)
    @NotBlank(message = "La contraseña debe tener un formato válido")
    private String password;

    @NotBlank(message = "El nombre no puede estar vacio")
    private String nombre;

    public RegisterRequest(String email, String password, String nombre) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
