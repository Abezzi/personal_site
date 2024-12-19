import type { MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Alex Herrera | Developer" },
    { name: "description", content: "Welcome to my site" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Bienvenido
      </h1>
    </div>
  );
}
