import type { MetaFunction } from "@remix-run/node";
import Profile from "~/components/Profile";
import Skills from "~/components/Skills";
import Socials from "~/components/Socials";
import Me from "/me.png";
import About from "~/components/About";
// import Experience from "~/components/Experience";

const wip = false;
export const meta: MetaFunction = () => {
  return [
    { title: "Alex Herrera | Developer" },
    {
      name: "description",
      content: "quote for the site, job experience and skills",
    },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Profile
        imageSrc={Me}
        name="Alex Herrera"
        description="Developer who loves to acquire as many skills as possible, following the direction of the circumstances that impose my deepest interest in the world of technology."
        width={128}
        height={128}
      />
      <Socials />
      <About />
      {/*
      <Experience />
      */}

      {/*wip flag*/}
      {wip ? (
        <p className="text-center bg-yellow-200">SITE IN CONSTRUCTION</p>
      ) : (
        <br />
      )}

      <Skills />
    </div>
  );
}
