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
    {
      name: "Twilio",
      slug: "twilio",
    },
    {
      name: "Stripe",
      slug: "stripe",
    },
    {
      name: "DigitalOcean",
      slug: "digitalocean",
    },
    {
      name: "Docker",
      slug: "docker",
    },
    {
      name: "Kubernetes",
      slug: "kubernetes",
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
    {
      name: "Affinity Designer",
      slug: "affinitydesigner",
    },
    {
      name: "CouchDB",
      slug: "apachecouchdb",
    },
    {
      name: "Atom",
      slug: "atom",
    },
    {
      name: "Cloudflare",
      slug: "cloudflare",
    },
    {
      name: "Debian",
      slug: "debian",
    },
    {
      name: "FIRST",
      slug: "first",
    },
    {
      name: "GitHub",
      slug: "github",
    },
    {
      name: "GitHub Pages",
      slug: "githubpages",
    },
    {
      name: "Bash",
      slug: "gnubash",
    },
    {
      name: "Heroku",
      slug: "heroku",
    },
    {
      name: "Jekyll",
      slug: "jekyll",
    },
    {
      name: "MacOS",
      slug: "macos",
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
      name: "Microsoft Office",
      slug: "microsoftoffice",
    },
    {
      name: "Namebase",
      slug: "namebase",
    },
    {
      name: "Prettier",
      slug: "prettier",
    },
    {
      name: "Puppeteer",
      slug: "puppeteer",
    },
    {
      name: "Sentry",
      slug: "sentry",
    },
    {
      name: "Slack",
      slug: "slack",
    },
    {
      name: "Stripe",
      slug: "stripe",
    },
    {
      name: "Visual Studio Code",
      slug: "visualstudiocode",
    },
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
