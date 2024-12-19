import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Alex Herrera" },
    { name: "project list", content: "A list with projects made by Alex" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">
        Projects
      </h1>
    </div>
  );
}
