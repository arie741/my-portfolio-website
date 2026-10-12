import Head from "next/head";
import { profile } from "@/lib/cv";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
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
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
