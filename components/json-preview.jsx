import Typing from "react-typing-animation";

export default function jsonPreview() {
  return (
    <pre>
      <Typing startDelay={500}>{'→\n{"name":"Jack Crane"}'}</Typing>
      <Typing startDelay={1200} speed={8}>
        {`
←
{
  "name": "Jack Crane",
  "home": "Cincinnati, Ohio, United States",
  "age": 18,
  "education": [
    {
      "school": "Saint Louis University",
      "description": "B.S. in Mechanical Engineering"
    },
    {
      "school": "Summit Country Day School",
      "description": "High School"
    },
    {
      "school": "Lunken Flight Training Center",
      "description": "Flight Training"
    }
  ],
  "dreams": [
    "Become an engineer at a cutting-edge company",
    "Start a business"
  ],
  "passions": [
    "Programming",
    "Robotics",
    "Aviation",
    "Building",
    "Learning"
  ]
}`}
      </Typing>
    </pre>
  );
}
