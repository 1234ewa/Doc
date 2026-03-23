# Subir este proyecto a GitHub (sobrescribiendo el repo existente)

## Importante
- **Respaldar el repo anterior**: Si aún necesitas algo del proyecto viejo, descárgalo o clónalo en otra carpeta antes de hacer el `push --force`.
- Sobrescribir con `git push --force` **borra el historial y archivos anteriores** en la rama (por defecto `main` o `master`).

---

## Pasos

### 1. Inicializar Git en esta carpeta (si no está)

```bash
cd "c:\Users\gaelz\Documents\Propuesta 2"
git init
```

### 2. Añadir todos los archivos y hacer el primer commit

```bash
git add .
git commit -m "Sitio web consultorio Dr. Campos - Next.js"
```

### 3. Conectar con tu repositorio de GitHub

Sustituye `TU_USUARIO` y `TU_REPOSITORIO` por los de tu repo (ej. `https://github.com/miusuario/mirepo.git`):

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

Si ya existía un `origin` y quieres reemplazarlo:

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

### 4. Subir sobrescribiendo todo lo que había en GitHub

Si la rama en GitHub se llama **main**:

```bash
git branch -M main
git push -u origin main --force
```

Si la rama se llama **master**:

```bash
git branch -M master
git push -u origin master --force
```

El `--force` hace que lo que está en GitHub se reemplace por este proyecto.

---

## Después del push

- En GitHub solo quedará este proyecto (el anterior ya no estará en esa rama).
- Para futuros cambios: `git add .` → `git commit -m "mensaje"` → `git push` (sin `--force`).
