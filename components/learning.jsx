import styles from "../assets/styles/skills.module.css";
import Image from "next/image";
import Icon from "./Icon";

export default function Learning() {
  const learning = [
    {
      name: "Kubernetes",
      slug: "kubernetes",
    },
    {
      name: "CouchDB",
      slug: "apachecouchdb",
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
      name: "Typescript",
      slug: "typescript",
    },
  ];

  return (
    <div className={styles.skills} id="learning">
      <div className={styles.feature}>
        <h1>Learning</h1>
        <br />
        <div className={styles.skillsList}>
          {learning.map((skill, i) => (
            <div className={styles.skill} key={i}>
              <div>
                {/* <Image
                  height="24"
                  width="24"
                  key={i}
                  alt={skill.slug}
                  src={`https://unpkg.com/simple-icons@v6/icons/${skill.slug}.svg`}
                /> */}
                <Icon name={skill.slug} key={i} />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
