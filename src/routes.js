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
import Ventas from "views/examples/Ventas.js";
import Alertas from "views/examples/Alertas.js";
import Compras from "views/examples/Compras.js";
import Inventario from "views/examples/Inventario.js";
import Ordenes from "views/examples/Ordenes.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/ventas",
    name: "Ventas",
    icon: "ni ni-shop text-green",
    component: Ventas,
    layout: "/admin"
  },
  {
    path: "/alertas",
    name: "Alertas",
    icon: "ni ni-bell-55 text-red",
    component: Alertas,
    layout: "/admin"
  },
  {
    path: "/compras",
    name: "Compras",
    icon: "ni ni-cart text-orange",
    component: Compras,
    layout: "/admin"
  },
  {
    path: "/inventario",
    name: "Inventario",
    icon: "ni ni-chart-bar-32 text-Primary",
    component: Inventario,
    layout: "/admin"
  },
  {
    path: "/ordenes",
    name: "Ordenes",
    icon: "ni ni-single-copy-04 text-info",
    component: Ordenes,
    layout: "/admin"
  }
  /*,
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }*/
];
export default routes;
