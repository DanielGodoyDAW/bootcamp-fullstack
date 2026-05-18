# Git — comandos básicos (ramas)

## Para clonar un repositorio de GitHub a tu máquina local:
```bash 
git clone <url>
```

## Para actualizar tu repositorio local con los cambios del remoto:
```bash
git pull
```
## Para subir tus cambios al remoto (GitHub):
```bash
git push
```

## Crear una rama
Crea la rama **localmente** (no cambia a ella):
```bash
git branch nombre-rama
```

Recomendado: crearla **y cambiarte** en un solo comando:
```bash
git switch -c nombre-rama
# (alternativa antigua) git checkout -b nombre-rama
```

## Cambiar de rama
```bash
git switch nombre-rama
# (alternativa antigua) git checkout nombre-rama
```

## Añadir cambios (commit) y subirlos a GitHub
```bash
git add index.html      # o: git add . que añade todo, pero no es recomendable
git commit -m "mensaje"
git push
```

Si es la **primera vez** que subes esa rama al remoto:
```bash
git push -u origin nombre-rama
```

## Combinar (merge) ramas

Ejemplo: combinar `feature/form` dentro de `main`:
```bash
git switch main
git merge feature/form
```

## Para ver solo ramas locales
```bash
git branch
```

## Para ver todas las ramas (locales y remotas)
```bash
git branch -a
``` 

## Para ver solo ramas remotas
```bash
git branch -r
```

## Borrar una rama
### 1) Borrar rama local
```bash
git branch -d nombre-rama
```

Si Git no te deja porque no está mergeada y quieres forzar:
```bash
git branch -D nombre-rama
```

### 2) Borrar rama remota (GitHub)
```bash
git push origin --delete nombre-rama
```

### 3) (Opcional) Limpiar referencias locales de ramas remotas borradas
```bash
git fetch --prune
```

## Ver commits candidatos durante un bisect
Muestra todos los commits que todavía pueden ser la causa del problema dentro de una sesión activa de `git bisect`:
```bash
git bisect --all
```
## para hacer un merge (merge significa combinar ramas)
primero te situas en la rama a la que quieres combinar (ejemplo: main) y luego haces el merge con la rama que quieres combinar (ejemplo: feature/form)
```bash
git merge nombre-rama
```
una vez hecho esto, un push para subir los cambios a GitHub
```bash
git push
```


## Palabras clave para tener buenas practicas a la hora de subir un commit

feat: (de feature) – Cuando añades una nueva funcionalidad (ej. la función del cuadrado).

fix: – Cuando arreglas un error o bug.

docs: – Cambios solo en la documentación (comentarios, README).

style: – Cambios de formato que no afectan al código (espacios, puntos y coma, CSS visual).

refactor: – Código que ni arregla un error ni añade una función, solo lo mejoras para que se lea mejor.

test: – Añadir o corregir pruebas.

chore: – Tareas de mantenimiento (actualizar dependencias, configurar herramientas).

----------------------------