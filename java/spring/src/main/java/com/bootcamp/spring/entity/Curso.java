package com.bootcamp.spring.entity;

import jakarta.persistence.*;

@Entity
@Table(name= "cursos")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    protected Curso() {}

    //TODO agregamos comprobaciones para que no introduzcan datos erroneos
    public Curso(String titulo, int duracionHoras, double precio) {
        /*public Curso(Long id, String titulo, int duracionHoras, double precio)
        if(id == null){
            throw new IllegalArgumentException("El id es obligatorio");
        }
        this.id = id;

        if(titulo == null || titulo.isBlank()){
            throw new IllegalArgumentException("El titulo es obligatorio");
        }*/
        setTitulo(titulo);
        this.titulo = titulo;
        if(duracionHoras <= 0){
            throw new IllegalArgumentException("El duracion horas es obligatorio");
        }
        this.duracionHoras = duracionHoras;
        if (precio < 0){
            throw new IllegalArgumentException("El precio no puede ser negativo");
        }
        this.precio = precio;
        this.activo = true;
    }

    //TODO ---- agregamos nueva funcionalidad
    public boolean esGratuito(){
        return precio == 0;
    }

    public boolean esIntensivo(){
        return  duracionHoras >= 80;
    }
    //TODO ----

    // ! agregamos una funcion para actualizar los datos y le agregamos comprobaciones
    public void actualizarDatos(String titulo, int duracionHoras, double precio){
        /*
        if(titulo == null || titulo.isBlank()){
            throw new IllegalArgumentException("El titulo es obligatorio");
        }*/
        setTitulo(titulo); //! podriamos hacerlo de las 2 maneras o agregando seters privados o haciendo la comprobacion, por eso comento las 2 funcionalidades
        if(duracionHoras <= 0){
            throw new IllegalArgumentException("El duracion horas es obligatorio");
        }
        if (precio < 0){
            throw new IllegalArgumentException("El precio no puede ser negativo");
        }
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
    }

    // ! para hacer el ejemplo con set privados
    private void setTitulo(String titulo){
        if(titulo == null || titulo.isBlank()){
            throw new IllegalArgumentException("El titulo es obligatorio");
        }
        this.titulo = titulo;
    }

    public void activar(){
        this.activo = true;
    }
    public void desctivar(){
        this.activo = false;
    }

    //para que se muestren los datos tenemos que declarar los get
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
}
