import Head from "next/head";
import Header from "../components/header";
import Nav from "../components/nav";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Skills from "../components/skills";
import Learning from "../components/learning";
import Ukraine from "../components/ukraine";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Crane</title>
      </Head>
      <Ukraine />
      <div class="c">
        <Nav />
        <Header />
        <Projects />
        <Skills />
        <Learning />
        <Contact />
      </div>
    </>
  );
}
