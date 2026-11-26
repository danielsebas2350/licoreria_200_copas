import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, Wine, BarChart3 } from "lucide-react";
import { modules } from "../data/modules";
import Icon from "./Icon";

export default function Layout() {
  const navigate = useNavigate();
  const cerrarSesion = () => { localStorage.removeItem("token"); navigate("/login"); };
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Wine size={23}/></div><div><b>200 COPAS</b><small>LICORERÍA</small></div></div>
      <div className="menu-caption">MENÚ PRINCIPAL</div>
      <nav>
        <NavLink to="/" end className={({isActive})=>isActive?"nav-link active":"nav-link"}><LayoutDashboard size={18}/>Panel principal</NavLink>
        {modules.map(m=><NavLink key={m.path} to={`/${m.path}`} className={({isActive})=>isActive?"nav-link active":"nav-link"}><Icon name={m.icon}/>{m.title}</NavLink>)}
        <NavLink to="/reportes" className={({isActive})=>isActive?"nav-link active":"nav-link"}><BarChart3 size={18}/>Reportes</NavLink>
      </nav>
      <div className="sidebar-bottom"><div className="user-mini"><div className="avatar">DM</div><div><b>Administrador</b><small>200 Copas</small></div></div><button className="logout" onClick={cerrarSesion}><LogOut size={17}/>Cerrar sesión</button></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div><span className="topbar-kicker">GESTIÓN COMERCIAL</span><b>Licorería 200 Copas</b></div><div className="topbar-user"><span className="status-dot"></span> Sesión activa <div className="avatar small">DM</div></div></header>
      <div className="page-container"><Outlet/></div>
      <footer>© 2026 Licorería 200 Copas · Administración de inventario</footer>
    </main>
  </div>;
}