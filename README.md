# Licorería 200 Copas - Frontend React

## Requisitos
- Node.js LTS y npm
- Visual Studio Code (recomendado)

## Instalación
```bash
npm install
cp .env.example .env
npm run dev
```
En Windows PowerShell, si `cp` no funciona:
```powershell
Copy-Item .env.example .env
```
Abrir la URL que muestra Vite, normalmente http://localhost:5173.

## Modo demostración
Por defecto `VITE_USE_MOCK=true`. Se usan datos de ejemplo en memoria para probar la interfaz.
Los cambios de demostración se pierden al recargar la página.

## Conexión con NestJS
Cuando el backend esté disponible, editar `.env`:
```env
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK=false
```
La API debe exponer endpoints REST como:
- GET/POST /productos
- PATCH/DELETE /productos/:id
- GET/POST /categorias
- GET/POST /proveedores
- GET/POST /usuarios
- GET/POST /sucursales
- GET/POST /almacenes
- GET/POST /compras
- GET/POST /ventas
- GET/POST /inventario
- GET/POST /ajustes
- GET /movimientos

El frontend es una base de interfaz. Los nombres y formatos de los DTO/endpoints deben coincidir con los que se implementen en NestJS.
El formulario de login es demostrativo: no autentica realmente. La autenticación real debe conectarse al endpoint de NestJS y guardar el JWT devuelto.
