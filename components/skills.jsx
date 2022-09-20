import styles from "../assets/styles/skills.module.css";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "Javascript",
      slug: "javascript",
    },
    {
      name: "React",
      slug: "react",
    },
    {
      name: "React Native (using Expo)",
      slug: "expo",
    },
    {
      name: "Next.js",
      slug: "nextdotjs",
    },
    {
      name: "Deno",
      slug: "deno",
    },
    {
      name: "Node.js",
      slug: "nodedotjs",
    },
    {
      name: "Express",
      slug: "express",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
    },
    {
      name: "MySQL",
      slug: "mysql",
    },
    // {
    //   name: "Twilio",
    //   slug: "twilio",
    // },
    // {
    //   name: "Stripe",
    //   slug: "stripe",
    // },
    {
      name: "DigitalOcean",
      slug: "digitalocean",
    },
    {
      name: "Docker",
      slug: "docker",
    },
    {
      name: "PHP",
      slug: "php",
    },
    {
      name: "HTML",
      slug: "html5",
    },
    {
      name: "CSS",
      slug: "css3",
    },
    {
      name: "LESS",
      slug: "less",
    },
    // {
    //   name: "CouchDB",
    //   slug: "apachecouchdb",
    // },
    {
      name: "Cloudflare Workers",
      slug: "cloudflare",
    },
    {
      name: "GitHub",
      slug: "github",
    },
    // {
    //   name: "GitHub Pages",
    //   slug: "githubpages",
    // },
    {
      name: "Jekyll",
      slug: "jekyll",
    },
    {
      name: "Makerbot",
      slug: "makerbot",
    },
    {
      name: "Markdown",
      slug: "markdown",
    },
    {
      name: "Puppeteer",
      slug: "puppeteer",
    },
    // {
    //   name: "Sentry",
    //   slug: "sentry",
    // },
    // {
    //   name: "Slack",
    //   slug: "slack",
    // },
  ];

  return (
    <div className={styles.skills} id="skills">
      <div className={styles.feature}>
        <h1>Skills</h1>
        <br />
        <div className={styles.skillsList}>
          {skills.map((skill, i) => (
            <div className={styles.skill} key={i}>
              <div>
                <Image
                  height="24"
                  width="24"
                  key={i}
                  alt={skill.slug}
                  loading="eager"
                  src={`https://unpkg.com/simple-icons@v6/icons/${skill.slug}.svg`}
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
