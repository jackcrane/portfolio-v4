import styles from "../assets/styles/projects.module.css";
import Image from "next/image";
import Icon from "./Icon";

export default function Projects() {
  const projects = [
    {
      name: "Paddlefest App",
      subtitle: "Active Project",
      image: "/images/paddlefest.png",
      description:
        "Simple mobile app allowing event attendees to interact with Paddlefest, recieve notifications, see a schedule, and use a map",
      links: [
        {
          title: "Blog Post",
          url: "https://blog.jackcrane.rocks/2022/04/22/paddlefest-app.html",
        },
      ],
      stack: [
        "react",
        "javascript",
        "expo",
        "nodedotjs",
        "express",
        "mongodb",
        "kubernetes",
        "digitalocean",
        "amazons3",
      ],
    },
    {
      name: "Apple Music Presence",
      subtitle: "Active Project",
      image: "/images/amp.png",
      description:
        "A simple command-line app to allow Apple Music users to share the song, artist, and album cover they are listening to on Discord.",
      links: [
        {
          title: "Github",
          url: "https://github.com/jackcrane/apple-music-presence",
        },
        {
          title: "Blog Post",
          url: "https://blog.jackcrane.rocks/2022/05/02/apple-music-presence.html",
        },
      ],
      stack: ["nodedotjs", "amazons3", "discord", "applemusic"],
    },
    {
      name: "Ski Perfect North Slopes",
      subtitle: "Retired Project",
      image: "/images/pns.png",
      description:
        "A mobile app for a local Ski Area, giving guests access to snow information, live photos, location information, and safety resources right at their fingertips.",
      links: [],
      stack: [
        "react",
        "javascript",
        "expo",
        "puppeteer",
        "docker",
        "kubernetes",
        "mongodb",
        "deno",
        "ios",
        "android",
        "digitalocean",
      ],
    },
    {
      name: "Robot",
      subtitle: "Active Project",
      image: "/images/scdr.png",
      transparent: true,
      description:
        "I am the captain of my high school robotics team, here is the robot that I led the construction of, as well as created the CAD model.",
      links: [
        {
          title: "OnShape",
          url: "http://go.scdrobotics.org/pZhFyN",
        },
        {
          title: "Writeup",
          url: "http://go.scdrobotics.org/1PE1zH",
        },
      ],
      stack: ["first"],
    },
    {
      name: "JVerify",
      subtitle: "Active Project",
      image: "/images/jv.png",
      description:
        "JVerify is an effortless, secure, and reliable phone number verification service (VaaS) designed to make it easier to create a more reliable web.",
      links: [
        {
          title: "Live site",
          url: "https://jverify.us",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/18/jverify.html",
        },
      ],
      stack: [
        "npm",
        "nodedotjs",
        "javascript",
        "express",
        "html5",
        "less",
        "mysql",
        "twilio",
        "stripe",
        "digitalocean",
        "simpleanalytics",
      ],
    },
    {
      name: "OG Image Generator",
      subtitle: "Active Project",
      image: "/images/og.png",
      description:
        "OG Image Generator is an 'opengraph image generator as a service', providing an API endpoint to make custom site preview images without the need for design skills.",
      links: [
        {
          title: "Live site",
          url: "https://og-image.xyz",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/20/og-image.html",
        },
        {
          title: "Github Repo",
          url: "https://github.com/jackcrane/og-image",
        },
      ],
      stack: [
        "html5",
        "nodedotjs",
        "javascript",
        "express",
        "mysql",
        "react",
        "digitalocean",
        "kubernetes",
        "docker",
      ],
    },
    {
      name: "GitHub profile tik-tak-toe",
      subtitle: "Active Project",
      image: "/images/t.png",
      description:
        "A somewhat fun game for visitors to my GitHub profile and blog post to play. This project won me the Cloudflare Summer Dev Challenge for my use of serverless functions",
      links: [
        {
          title: "Play Live",
          url: "https://github.com/jackcrane",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/10/19/gh-tik-tak-toe.html",
        },
        {
          title: "Github Repo",
          url: "https://github.com/jackcrane/gh-tik-tak-toe",
        },
      ],
      stack: ["markdown", "github", "javascript", "cloudflare"],
    },
    {
      name: "Scarecrow Row",
      subtitle: "Active Project",
      image: "/images/sr.png",
      description:
        "Scarecrow Row is a fun fall installation of unique and creative scarecrows set along the 2-mile bike and walking trail of Otto Armleder Park, located on Cincinnati’s eastside next to Lunken Airport and Playfield. Thanks to funds raised by this website, we were able to donate over 8000 dollars to a local nonprofit helping those battling addiction.",
      links: [
        {
          title: "Live site",
          url: "https://scarecrowrow.org",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/14/scarecrow-row.html",
        },
      ],
      stack: [
        "html5",
        "css3",
        "javascript",
        "stripe",
        "github",
        "digitalocean",
      ],
    },
    {
      name: "MTS Express",
      subtitle: "Active Project",
      image: "/images/mts.png",
      description:
        "MTS Express is a mobile app for Myers Tire Supply that allows sales reps to quickly and easily order new products for their customers via a barcode scanner, cart management, and database integration.",
      links: [],
      stack: [
        "react",
        "javascript",
        "expo",
        "nodedotjs",
        "mysql",
        "docker",
        "kubernetes",
        "digitalocean",
      ],
    },
    {
      name: "FTC Explorer",
      subtitle: "Active Project",
      image: "/images/ftc.png",
      description:
        "FTC Explorer is a small app that allows users to search for FTC events and teams by name, location, or date.",
      links: [
        {
          title: "Testflight",
          url: "https://testflight.apple.com/join/sfGnrpSd",
        },
      ],
      stack: ["react", "javascript", "expo", "ios"],
    },
    {
      name: "FTCLayer Docs",
      subtitle: "Active Project",
      image: "/images/ftcl.png",
      description:
        "FTCLayer is a Java Library that simplifies development of FTC code. I created the documentation for the library with the help of Docusaurus.",
      links: [
        {
          title: "Live site",
          url: "https://ftclayer-docs.pages.dev/",
        },
      ],
      stack: ["react", "javascript", "github"],
    },
    {
      name: "Profile v5",
      subtitle: "This Project",
      image: "/images/v5.png",
      description:
        "My current personal website in hopes of sharing a little snippet into my life and passions!",
      links: [],
      stack: ["react", "javascript", "nextdotjs", "html5", "less"],
    },
  ];

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.feature}>
        <h1>Projects</h1>
        <br />
        <p style={{ display: "block" }}>
          Check out my huge range of projects, many personal projects, some for
          clients.
        </p>
      </div>
      {projects.map((project, i) => (
        <div className={styles.project} key={i}>
          <div className={styles.text}>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <h2>{project.name}</h2>
            <br />
            <p>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech, i) => (
                <Icon name={tech} key={i} />
                // <></>
              ))}
            </div>
            <div className={styles.links}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.image}>
            <img
              src={project.image}
              alt={project.name}
              style={{
                mixBlendMode: project.transparent ? "multiply" : "normal",
              }}
              className={styles.screenshot}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
