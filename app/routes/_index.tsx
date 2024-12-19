import type { MetaFunction } from "@remix-run/node";
import Profile from "~/components/Profile";
import Me from "/brand.png"

export const meta: MetaFunction = () => {
  return [
    { title: "Alex Herrera | Developer" },
    { name: "description", content: "Welcome to my site" },
  ];
};

export default function Index() {
  return (
    <div>
      <Profile
        imageSrc={Me}
        name="Alex Herrera"
        description="Developer who loves to acquire as many skills as possible, following the direction of the circumstances that impose my deepest interest in the world of technology."
        width={128}
        height={128}
      />
    </div>
  );
}
