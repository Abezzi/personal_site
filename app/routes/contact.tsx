import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Me | Alex Herrera" },
    {
      name: "contact",
      content: "here you can writte your information to send me an email",
    },
  ];
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">Contact page</h1>
    </div>
  );
}
