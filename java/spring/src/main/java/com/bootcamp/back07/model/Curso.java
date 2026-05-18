package com.bootcamp.back07.model;

import jakarta.persistence.*;
import org.springframework.context.annotation.Primary;

@Entity
@Table(name = "cursos")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;
    // Categoria OneToMany Curso
    // Curso ManyToOne Categoria
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    protected Curso() {}

    public Curso(String titulo, int duracionHoras, double precio, Categoria categoria) {
        actualizarDatos(titulo,duracionHoras, precio, categoria);
    }

    public void activar() {
        this.activo = true;
    }

    public void desactivar() {
        this.activo = false;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getDuracionHoras() {
        return duracionHoras;
    }

    public double getPrecio() {
        return precio;
    }

    public boolean isActivo() {
        return activo;
    }

    public boolean isFree() {
        return getPrecio() == 0;
    }

    public boolean isIntensive() {
        return getDuracionHoras() >= 86;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void actualizarDatos(String titulo, int duracionHoras, double precio, Categoria categoria) {
        validarDatos(titulo,duracionHoras,precio);
        validadCategoria(categoria);

        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
        this.categoria = categoria;

    }

    private void validarDatos(String titulo, int duracionHoras, double precio) {
        if (titulo == null || titulo.isBlank())
            throw new IllegalArgumentException("El título es obligatorio");
        if (duracionHoras <= 0 ) {
            throw new IllegalArgumentException("Las horas no pueden ser negativas");
        }
        if (precio < 0) {
            throw new IllegalArgumentException("El precio no puede ser negativo");
        }
    }

    private void validadCategoria(Categoria categoria) {
        if (categoria == null)
            throw new IllegalArgumentException("La categoria no puede ser null");
    }

}
