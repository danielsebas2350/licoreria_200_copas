export const modules = [
  { path:"productos", title:"Productos", description:"Administra el catálogo de bebidas.", icon:"Package", endpoint:"productos",
    fields:[
      {name:"codigo",label:"Código",required:true},{name:"nombre",label:"Nombre",required:true},
      {name:"categoria",label:"Categoría",required:true},{name:"marca",label:"Marca"},
      {name:"precio_compra",label:"Precio de compra",type:"number",required:true},
      {name:"precio_venta",label:"Precio de venta",type:"number",required:true},
      {name:"stock_minimo",label:"Stock mínimo",type:"number"}
    ], columns:["codigo","nombre","categoria","marca","precio_venta"] },
  { path:"categorias", title:"Categorías", description:"Organiza los productos por tipo de bebida.", icon:"Tags", endpoint:"categorias",
    fields:[{name:"nombre",label:"Nombre",required:true},{name:"descripcion",label:"Descripción"}], columns:["nombre","descripcion"] },
  { path:"proveedores", title:"Proveedores", description:"Administra los datos de tus proveedores.", icon:"Truck", endpoint:"proveedores",
    fields:[{name:"nombre",label:"Nombre o razón social",required:true},{name:"nit",label:"NIT"},{name:"telefono",label:"Teléfono"},{name:"correo",label:"Correo",type:"email"},{name:"direccion",label:"Dirección"}], columns:["nombre","nit","telefono","correo"] },
  { path:"usuarios", title:"Usuarios", description:"Gestiona las cuentas de acceso.", icon:"Users", endpoint:"usuarios",
    fields:[{name:"nombre",label:"Nombre",required:true},{name:"apellido",label:"Apellido",required:true},{name:"correo",label:"Correo",type:"email",required:true},{name:"rol",label:"Rol",required:true}], columns:["nombre","apellido","correo","rol"] },
  { path:"sucursales", title:"Sucursales", description:"Administra los puntos de venta.", icon:"Store", endpoint:"sucursales",
    fields:[{name:"nombre",label:"Nombre",required:true},{name:"direccion",label:"Dirección"},{name:"telefono",label:"Teléfono"}], columns:["nombre","direccion","telefono"] },
  { path:"almacenes", title:"Almacenes", description:"Define dónde se almacenan los productos.", icon:"Warehouse", endpoint:"almacenes",
    fields:[{name:"nombre",label:"Nombre",required:true},{name:"sucursal",label:"Sucursal",required:true},{name:"descripcion",label:"Descripción"}], columns:["nombre","sucursal","descripcion"] },
  { path:"compras", title:"Compras", description:"Registra el ingreso de mercadería.", icon:"ShoppingBasket", endpoint:"compras",
    fields:[{name:"proveedor",label:"Proveedor",required:true},{name:"producto",label:"Producto",required:true},{name:"cantidad",label:"Cantidad",type:"number",required:true},{name:"costo_unitario",label:"Costo unitario",type:"number",required:true},{name:"almacen",label:"Almacén",required:true}], columns:["proveedor","producto","cantidad","costo_unitario","almacen"] },
  { path:"ventas", title:"Ventas", description:"Registra las ventas realizadas.", icon:"ShoppingCart", endpoint:"ventas",
    fields:[{name:"producto",label:"Producto",required:true},{name:"cantidad",label:"Cantidad",type:"number",required:true},{name:"precio_unitario",label:"Precio unitario",type:"number",required:true},{name:"almacen",label:"Almacén",required:true}], columns:["producto","cantidad","precio_unitario","almacen"] },
  { path:"inventario", title:"Inventario", description:"Consulta las existencias por almacén.", icon:"Boxes", endpoint:"inventario",
    fields:[{name:"producto",label:"Producto",required:true},{name:"almacen",label:"Almacén",required:true},{name:"stock_actual",label:"Stock actual",type:"number",required:true}], columns:["producto","almacen","stock_actual"] },
  { path:"ajustes", title:"Ajustes de inventario", description:"Registra diferencias y correcciones justificadas.", icon:"SlidersHorizontal", endpoint:"ajustes",
    fields:[{name:"producto",label:"Producto",required:true},{name:"almacen",label:"Almacén",required:true},{name:"cantidad",label:"Cantidad",type:"number",required:true},{name:"tipo",label:"Tipo (ENTRADA/SALIDA)",required:true},{name:"motivo",label:"Motivo",required:true}], columns:["producto","almacen","cantidad","tipo","motivo"] },
  { path:"movimientos", title:"Movimientos", description:"Consulta el historial de entradas y salidas.", icon:"ArrowLeftRight", endpoint:"movimientos",
    fields:[{name:"producto",label:"Producto",required:true},{name:"almacen",label:"Almacén",required:true},{name:"tipo",label:"Tipo",required:true},{name:"cantidad",label:"Cantidad",type:"number",required:true},{name:"observacion",label:"Observación"}], columns:["producto","almacen","tipo","cantidad","observacion"] }
];

export const initialData = {
  productos:[
    {id:1,codigo:"BEB-001",nombre:"Cerveza Pilsener",categoria:"Cervezas",marca:"Paceña",precio_compra:7,precio_venta:10,stock_minimo:20},
    {id:2,codigo:"BEB-002",nombre:"Vodka clásico",categoria:"Vodkas",marca:"Absolut",precio_compra:65,precio_venta:85,stock_minimo:5},
    {id:3,codigo:"BEB-003",nombre:"Whisky etiqueta negra",categoria:"Whisky",marca:"Johnnie Walker",precio_compra:180,precio_venta:230,stock_minimo:4}
  ],
  categorias:[{id:1,nombre:"Cervezas",descripcion:"Cervezas nacionales e importadas"},{id:2,nombre:"Vodkas",descripcion:"Bebidas destiladas"}],
  proveedores:[{id:1,nombre:"Distribuidora Central",nit:"1020304012",telefono:"70123456",correo:"ventas@ejemplo.com",direccion:"La Paz"}],
  usuarios:[{id:1,nombre:"Daniel",apellido:"Mamani",correo:"admin@200copas.com",rol:"Administrador"}],
  sucursales:[{id:1,nombre:"Casa matriz",direccion:"La Paz",telefono:"2220000"}],
  almacenes:[{id:1,nombre:"Almacén principal",sucursal:"Casa matriz",descripcion:"Depósito general"}],
  compras:[],ventas:[],
  inventario:[{id:1,producto:"Cerveza Pilsener",almacen:"Almacén principal",stock_actual:120},{id:2,producto:"Vodka clásico",almacen:"Almacén principal",stock_actual:12}],
  ajustes:[],movimientos:[]
};