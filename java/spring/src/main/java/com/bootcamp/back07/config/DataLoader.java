package com.bootcamp.back07.config;

import com.bootcamp.back07.enums.Rol;
import com.bootcamp.back07.model.Categoria;
import com.bootcamp.back07.model.Curso;
import com.bootcamp.back07.model.Usuario;
import com.bootcamp.back07.repository.CategoriaRepository;
import com.bootcamp.back07.repository.CursoRepository;
import com.bootcamp.back07.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class DataLoader implements CommandLineRunner {

    private final CursoRepository cursoRepository;
    private final CategoriaRepository categoriaRepository;
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(CursoRepository cursoRepository, CategoriaRepository categoriaRepository, UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.cursoRepository = cursoRepository;
        this.categoriaRepository = categoriaRepository;
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void insertarDatos() {

        Usuario usuario = usuarioRepository.save(new Usuario(
                "Juan",
                "juan@email.com",
                passwordEncoder.encode("juanilloElMolon123"),
                Set.of(Rol.ROL_ADMIN)
        )
        );

        Categoria catJava = categoriaRepository.save(new Categoria("Java", "Tecnologías Java"));
        Categoria catReact = categoriaRepository.save(new Categoria("React", "Tecnologías React"));
        Categoria catSQL = categoriaRepository.save(new Categoria("SQL", "Tecnologías SQL"));
        Categoria catJoa = categoriaRepository.save(new Categoria("Joaquín", "Tecnologías Joaquín"));

        cursoRepository.save(new Curso("Curso Java", 80, 199.99, catJava));
        cursoRepository.save(new Curso("Curso React", 80, 199.99, catReact));
        cursoRepository.save(new Curso("Curso SQL", 80, 199.99, catSQL));
        cursoRepository.save(new Curso("Curso de Joaquín", 90, 99.99, catJoa));
    }

    @Override
    public void run(String... args) throws Exception {
        insertarDatos();
    }
}
