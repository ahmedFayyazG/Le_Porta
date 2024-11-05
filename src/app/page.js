import Image from "next/image";
import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./Components/ui/Grid";
import { Tabs } from "./Components/ui/AnimatedTabs";
import ParentComponent from "./Components/ui/Tabs";
import RecentProjects from "./Components/RecentProjects";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#000319" }}
      className="relative bg-black flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <ParentComponent />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
