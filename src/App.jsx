import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CrudPage from "./pages/CrudPage";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import { modules } from "./data/modules";

export default function App() {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<Layout />}>
      <Route index element={<Dashboard />} />
      {modules.map((m) => <Route key={m.path} path={m.path} element={<CrudPage module={m} />} />)}
      <Route path="reportes" element={<Reports />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>;
}