# Git — comandos básicos (ramas)

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