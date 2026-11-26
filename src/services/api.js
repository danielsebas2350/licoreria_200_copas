import axios from "axios";
import { initialData } from "../data/modules";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 10000
});
const useMock = import.meta.env.VITE_USE_MOCK !== "false";
const clone = (value) => JSON.parse(JSON.stringify(value));
let mockData = clone(initialData);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export async function listar(endpoint) {
  if (useMock) return mockData[endpoint] || [];
  const { data } = await api.get(`/${endpoint}`);
  return data;
}
export async function crear(endpoint, registro) {
  if (useMock) {
    const nuevo = { ...registro, id: Date.now() };
    mockData[endpoint] = [...(mockData[endpoint] || []), nuevo];
    return nuevo;
  }
  const { data } = await api.post(`/${endpoint}`, registro);
  return data;
}
export async function actualizar(endpoint, id, registro) {
  if (useMock) {
    mockData[endpoint] = (mockData[endpoint] || []).map(x => x.id === id ? {...x,...registro} : x);
    return registro;
  }
  const { data } = await api.patch(`/${endpoint}/${id}`, registro);
  return data;
}
export async function eliminar(endpoint, id) {
  if (useMock) {
    mockData[endpoint] = (mockData[endpoint] || []).filter(x => x.id !== id);
    return true;
  }
  await api.delete(`/${endpoint}/${id}`);
  return true;
}
export default api;