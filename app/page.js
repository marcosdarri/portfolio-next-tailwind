import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Divider from "./components/Divider/Divider";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume.js/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Blogs from "./components/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Resume />
      <Divider />
      <Portfolio/>
      <Divider />
      <Blogs/>
      <Divider />
      <Contact />
    </>
  );
}
