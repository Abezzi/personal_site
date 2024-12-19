import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Articles | Alex Herrera" },
    { name: "articles list", content: "A list with articles made by Alex" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">
        Articles
      </h1>
    </div>
  );
}
