import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"
import Posts from "../components/sections/Posts"
import AboutMe from "../components/sections/AboutMe"
import Projects from "../components/sections/Projects"
import Experience from "../components/sections/Experience"
import Contact from "../components/sections/Contact"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"
import Nav from "../components/Nav"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])
  return (
    <main className="w-full h-full min-h-screen leading-relaxed bg-stone-900 text-stone-300 selection:bg-orange-700 selection:text-orange-200 text-lg scroll-smooth">
      <Head>
        <title>Dainyl Cua</title>
        <meta name="description" content="Dainyl Cua's personal website. Software engineer and technical content creator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ? 
          <Loading />
          :
          <></>
      }
      <Nav/>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Posts />
      <Contact />
    </main>
  )
}

export default Home
