import * as Icons from "lucide-react";
export default function Icon({ name, size=18 }) {
  const Component = Icons[name] || Icons.Circle;
  return <Component size={size} strokeWidth={1.8} />;
}