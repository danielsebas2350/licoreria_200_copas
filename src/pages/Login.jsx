import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wine, LockKeyhole, Mail } from "lucide-react";
export default function Login(){
  const [correo,setCorreo]=useState("admin@200copas.com");
  const [clave,setClave]=useState("");
  const [error,setError]=useState("");
  const navigate=useNavigate();
  function entrar(e){e.preventDefault(); if(!correo || !clave){setError("Completa el correo y la contraseña.");return;} localStorage.setItem("token","demo-token"); navigate("/");}
  return <div className="login-screen"><form className="login-card" onSubmit={entrar}><div className="login-logo"><Wine size={30}/></div><h1>200 COPAS</h1><p>Ingresa al panel de administración</p><label>Correo electrónico</label><div className="input-icon"><Mail size={17}/><input type="email" value={correo} onChange={e=>setCorreo(e.target.value)} placeholder="correo@ejemplo.com"/></div><label>Contraseña</label><div className="input-icon"><LockKeyhole size={17}/><input type="password" value={clave} onChange={e=>setClave(e.target.value)} placeholder="Ingresa tu contraseña"/></div>{error&&<div className="error-text">{error}</div>}<button className="btn-primary full">Iniciar sesión</button><small className="demo-note">Modo demostración: cualquier contraseña no vacía.</small></form></div>;
}