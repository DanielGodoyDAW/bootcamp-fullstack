package com.bootcamp.spring.config;

import com.bootcamp.spring.entity.Curso;
import com.bootcamp.spring.repository.CursoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader  implements CommandLineRunner {
    private final CursoRepository cursoRepository;


    public DataLoader(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (cursoRepository.count() == 0) {
            cursoRepository.save(new Curso("Java", 80, 199.99));
            cursoRepository.save(new Curso("Spring", 100, 299.99));
            cursoRepository.save(new Curso("Sql", 200, 259.99));
            cursoRepository.save(new Curso("JavaScript", 30, 0));
            cursoRepository.save(new Curso("Testing Backend", 40, 129.99));
        }
    }
}
