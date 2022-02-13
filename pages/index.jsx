import Head from "next/head";
import Header from "../components/header";
import Nav from "../components/nav";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Skills from "../components/skills";
import Learning from "../components/learning";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Crane</title>
      </Head>
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <Learning />
      <Contact />
    </>
  );
}
