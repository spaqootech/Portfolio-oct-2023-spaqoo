import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Hoobank Website",
    description:
      "The Next GenerationGet Payment Method.",
    image: "/hoobank.png",
    github: "https://github.com/spaqootech/Hoobank-spaqoo",
    link: "https://hoobank-spaqoo.vercel.app/",
  },
  {
    name: "Metaverse Website",
    description: "Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real",
    image: "/metaverse.png",
    github: "https://github.com/spaqootech/metavers-spaqoo",
    link: "https://metaverse-spaqoo.vercel.app/",
  },
  {
    name: "Nike Website",
    description:
      "Nike website clone using next js and tailwindcss",
    image: "/nike.png",
    github: "https://github.com/spaqootech/nike-clone-spaqoo",
    link: "https://nike-clone-spaqoo.vercel.app/",
  },
  {
    name: "Sushi Resturent Website",
    description:
      "Feel the taste of the most popular Japanese food from anywhere and anytime.",
    image: "/sushi.png",
    github: "https://github.com/spaqootech/restaurants-spaqoo",
    link: "https://restaurants-spaqoo.vercel.app/",
  },
  {
    name: "Travel Website",
    description: "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app",
    image: "/travel.png",
    github: "https://github.com/spaqootech/Travel-Website.git",
    link: "https://travel-website-712x07o9p-makeyourselfpro.vercel.app/",
  }
  ,
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
