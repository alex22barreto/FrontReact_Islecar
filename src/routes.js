/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import PrediccionVentas from "views/examples/Ventas/PrediccionVentas.js";
import ValorVentasProducto from "views/examples/Ventas/ValorVentasProducto.js";
import VentasCliente from "views/examples/Ventas/VentasCliente.js";
import VentasClusters from "views/examples/Ventas/VentasClusters.js";
import VentaSegmentoClientes from "views/examples/Ventas/VentaSegmentoClientes.js";
import VentasProductos from "views/examples/Ventas/VentasProductos.js";
import AlertaDesabastesimiento from "views/examples/Alertas/Desabastesimiento.js";
import AlertaSobreabastesimiento from "views/examples/Alertas/Sobreabastesimiento.js";
import ComprasProveedor from "views/examples/Compras/ComprasProveedor.js";
import OrdenesCompraSugeridas from "views/examples/Compras/OrdenesCompraSugeridas.js";
import KardexInsumos from "views/examples/Inventario/KardexInsumos.js";
import KardexMateriaPrima from "views/examples/Inventario/KardexMateriaPrima.js";
import KardexProductoTerminado from "views/examples/Inventario/KardexProductoTerminado.js";
import RequerimientoCompraAccesorios from "views/examples/Ordenes/RequerimientoCompraAccesorios.js";
import RequerimientoCompraInsumos from "views/examples/Ordenes/RequerimientoCompraInsumos.js";
import SmartContract from "views/examples/SmartContract.js";
import ConexionGoogleDrive from "views/examples/ConexionGoogleDrive";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    nameSubMenu: "",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    subMenu:false
  }
  /*,{
    path: "/ventas",
    name: "Ventas",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: "",
    layout: "/admin",
    subMenu:true
  }
  ,{
    path: "/ventas/prediccionVentas",
    name: "Prediccion Ventas",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: PrediccionVentas,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/ventas/valorVentasProducto",
    name: "Valor Ventas por Producto",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: ValorVentasProducto,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/ventas/ventasCliente",
    name: "Ventas por Cliente",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: VentasCliente,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/ventas/ventasClusters",
    name: "Ventas Clusters",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: VentasClusters,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/ventas/ventaSegmentoClientes",
    name: "Venta por Segmento de Clientes",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: VentaSegmentoClientes,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/ventas/ventasProductos",
    name: "Ventas por Productos",
    nameSubMenu: "Ventas",
    icon: "ni ni-shop text-green",
    component: VentasProductos,
    layout: "/admin",
    subMenu:false
  }*/
  ,{
    path: "/alertas/sobreabastesimiento",
    name: "Sobreabastesimiento",
    nameSubMenu: "Alertas",
    icon: "ni ni-bell-55 text-red",
    component: AlertaSobreabastesimiento,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/alertas/desabastesimineto",
    name: "Desabastesimineto",
    nameSubMenu: "Alertas",
    icon: "ni ni-bell-55 text-red",
    component: AlertaDesabastesimiento,
    layout: "/admin",
    subMenu:false
  }
  ,{
    path: "/alertas",
    name: "Alertas",
    nameSubMenu: "Alertas",
    icon: "ni ni-bell-55 text-red",
    component: "",
    layout: "/admin",
    subMenu:true
  }
  ,{
    path: "/compras",
    name: "Compras",
    nameSubMenu: "Compras",
    icon: "ni ni-cart text-orange",
    component: "",
    layout: "/admin",
    subMenu:true
  }
  ,{
    path: "/compras/comprasProveedor",
    name: "Compras por Proveedor",
    nameSubMenu: "Compras",
    icon: "ni ni-cart text-orange",
    component: ComprasProveedor,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/compras/ordenesCompraSugeridas",
    name: "Ordenes Sugeridas",
    nameSubMenu: "Compras",
    icon: "ni ni-cart text-orange",
    component: OrdenesCompraSugeridas,
    layout: "/admin",
    subMenu:false
  },  
  {
    path: "/inventario",
    name: "Inventario",
    nameSubMenu: "Inventario",
    icon: "ni ni-chart-bar-32 text-Primary",
    component: "",
    layout: "/admin",
    subMenu:true
  },
  {
    path: "/inventario/kardexInsumos",
    name: "Insumos",
    nameSubMenu: "Inventario",
    icon: "ni ni-chart-bar-32 text-Primary",
    component: KardexInsumos,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/inventario/kardexMateriaPrima",
    name: "MateriaPrima",
    nameSubMenu: "Inventario",
    icon: "ni ni-chart-bar-32 text-Primary",
    component: KardexMateriaPrima,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/inventario/kardexProductoTerminado",
    name: "ProductoTerminado",
    nameSubMenu: "Inventario",
    icon: "ni ni-chart-bar-32 text-Primary",
    component: KardexProductoTerminado,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/ordenes",
    name: "Ordenes",
    nameSubMenu: "Ordenes",
    icon: "ni ni-single-copy-04 text-info",
    component: "",
    layout: "/admin",
    subMenu:true
  },
  {
    path: "/ordenes/requerimientoCompraAccesorios",
    name: "Requerimiento de Compra Accesorios",
    nameSubMenu: "Ordenes",
    icon: "ni ni-single-copy-04 text-info",
    component: RequerimientoCompraAccesorios,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/ordenes/requerimientoCompraInsumos",
    name: "Requerimiento de Compra Insumos",
    nameSubMenu: "Ordenes",
    icon: "ni ni-single-copy-04 text-info",
    component: RequerimientoCompraInsumos,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/smartcontract",
    name: "SmartContract",
    nameSubMenu: "SmartContract",
    icon: "ni ni-single-copy-04 text-info",
    component: SmartContract,
    layout: "/admin",
    subMenu:true
  },
  {
    path: "/perfil",
    name: "Perfil",
    nameSubMenu: "",
    icon: "ni ni-single-copy-04 text-info",
    component: Profile,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/conexiongoogledrive",
    name: "Conexiongoogledrive",
    nameSubMenu: "",
    icon: "ni ni-single-copy-04 text-info",
    component: ConexionGoogleDrive,
    layout: "/admin",
    subMenu:false
  },
  {
    path: "/login",
    name: "Login",
    nameSubMenu: "",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    subMenu:false
  }
  /*,
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }*/
];
export default routes;
