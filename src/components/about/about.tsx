import * as React from "react"
import MeIcon from "../../assets/me.svg"
import EmailIcon from "../../assets/email.svg"
import Circle from "./circle"

const skillsData = [
  {
    name: "Java",
    level: 65,
    color: "#F4D35E",
  },
  {
    name: "JavaScript",
    level: 45,
    color: "#7CB4B8",
  },
  {
    name: "ReactJS",
    level: 60,
    color: "#A9714B",
  },
  {
    name: "CSS",
    level: 75,
    color: "#E8985E",
  },
  {
    name: "SCSS",
    level: 60,
    color: "#5AAA95",
  },
  {
    name: "HTML",
    level: 85,
    color: "#86A873",
  },
  {
    name: "C#",
    level: 25,
    color: "#F4FAFF",
  },
  {
    name: "Docker",
    level: 5,
    color: "#DEE7E7",
  },
  {
    name: "Wordpress",
    level: 15,
    color: "#B7ADCF",
  },
  {
    name: "Material UI",
    level: 75,
    color: "#22AED1",
  },
  {
    name: "TailwindCSS",
    level: 45,
    color: "#AFA98D",
  },
  {
    name: "GraphQL",
    level: 45,
    color: "#EBBE9B",
  },
  {
    name: "Spring Boot",
    level: 30,
    color: "#8447FF",
  },
  {
    name: "React Redux ",
    level: 35,
    color: "#BFAE48",
  },
  {
    name: "Git",
    level: 55,
    color: "#5FAD41",
  },
]

interface AboutProps {
  className: string
}
const AboutMe = ({ className }: AboutProps) => {
  return (
    <div className={`flex flex-1  items-center ${className}`}>
      <div className=" flex flex-1 w-full h-136 flex-col items-center overflow-y-auto  ">
        <div className="w-9/12 px-10 py-4 relative my-10  rounded-md">
          <h1 className="font-semibold text-center text-lg text-white mb-8 ">
            My skills
          </h1>
          {/* <SkillBars skills={skillsData} barsHeight={20} /> */}
          <div className="flex flex-wrap w-full justify-around  items-center bg-white bg-opacity-10">
            {skillsData.map(skill => {
              return (
                <Circle
                  key={`skill-${skill?.name}`}
                  text={skill.name}
                  limit={skill.level}
                  color={skill.color}
                  radius={45}
                  stroke={8}
                />
              )
            })}
          </div>
        </div>
        <div className="flex   h-72  my-8   shadow-2xl border ">
          <div className=" w-72  h-72 text-black bg-pine cursor-pointer flex items-center justify-center relative ">
            <MeIcon />
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.”
              </blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                – Martin Fowler
              </span>
            </div>
          </div>
          <div className="relative justify-center text-lg cursor-pointer  items-center flex-col flex text-black bg-prl3 w-72  px-4">
            <h1 className="font-semibold  my-4">Hi there!</h1>
            <p>
              I am Gyula Feigl, alias Pityubak with great interest in software
              development.
            </p>
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>
                “Code is like humor. When you have to explain it, it’s bad.”
              </blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                – Cory House
              </span>
            </div>
          </div>
          <div className=" relative flex flex-col cursor-pointer justify-center items-center p-4  w-72 text-lg bg-red-900 text-white ">
            <p>
              If you want to hire me or you have any question, please contact
              me:
            </p>
            <div className="flex items-center border rounded-full p-2 my-4">
              <EmailIcon />
              <p className="ml-2">idpityubak@gmail.com</p>
            </div>
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>“Talk is cheap. Show me the code.”</blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                ― Linus Torvalds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
