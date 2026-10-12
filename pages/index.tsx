import Head from "next/head";
import { profile } from "@/lib/cv";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={profile.summary} />
      </Head>
      <Nav />
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
