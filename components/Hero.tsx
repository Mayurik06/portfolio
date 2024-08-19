"use client";

import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import IconCloud from "./ui/IconCloudDemo";

function Hero() {

    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
      ];



  return (
  <>
    <HeroHighlight className="container w-6/12 mx-auto">
    
        <div className="flex align-center justify-between">
            <div className="flex-1">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-6xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto md:leading-loose"
      >
        Hi,<br/> I am Mayuri Khapne
{" "}<br/>
        <Highlight className="text-black dark:text-white">
          Frontend Developer
        </Highlight>
      </motion.h1>
      </div>
      <div className="flex-1">

      </div>
      </div>
    </HeroHighlight>
<IconCloud iconSlugs={slugs}/>
  </>
  )
}

export default Hero
