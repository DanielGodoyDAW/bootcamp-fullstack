package com.bootcamp.back06.model;

public class Incidencia {

    private int id;
    private String descripcion;
    private byte prioridad;
    private String estado;

    public Persona getPersonaResponsable() {
        return personaResponsable;
    }

    public void setPersonaResponsable(Persona personaResponsable) {
        this.personaResponsable = personaResponsable;
    }

    private Persona personaResponsable;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public byte getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(byte prioridad) {
        this.prioridad = prioridad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return id + " " + descripcion;
    }
}
