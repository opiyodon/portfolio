import { IProject, IService, ISkill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable website using <b> HTML </b>, <b> CSS </b> and  <b> React </b>',
    },
    {
        Icon: FaServer,
        title: 'Backend Development',
        about: 'handle database, server, api using <b> Express </b> & other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'i can develop robust REST API using <b> Node API </b>',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competetive Coder',
        about: 'a daily problem solver in <b> Hacker Rank </b>' ,
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Designer',
        about: 'stunning user interface designer using <b> Figma <b/>',
    },
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        about: 'handle database, server, api using <b> Express </b> & other popular frameworks',
    },
]


export const languages:ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Python',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Java Script',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'React Native',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'React',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Django',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '80%'
    }
]


export const tools:ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '85%'
    },
    {
        Icon: BsCircleFill,
        name: 'Photoshop',
        level: '45%'
    },
    {
        Icon: BsCircleFill,
        name: 'Illustrator',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'Framer',
        level: '45%'
    }
]

export const projects:IProject[] = [
    {
        id: 1,
        name: "COVID Tracker",
        description: "This app shows a statistical view about corona virus over the world",
        image_path: "/images/1.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: [
            "react"
        ],
        key_techs: [
            "React", 
            "Chart js", 
            "Material UI"
        ],
    },
    {
        id: 2,
        name: "Twitter Clone",
        description: "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        image_path: "/images/2.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: [
            "django", 
            "react"
        ],
        key_techs: [
            "React", 
            "Django", 
            "Django REST API"
        ],
    },
    {
        id: 3,
        name: "Algorithm Visualizer",
        description: "A web app which shows how an algorithm (path finding or sorting) works with cool animation",
        image_path: "/images/3.jpg",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: [
            "react"
        ],
        key_techs: [
            "React", 
            "firebase", 
            "Framer Motion"
        ],
    },
    {
        id: 4,
        name: "Dev Talks",
        description: "Social Media app for developers who can share project,create posts,etc...",
        image_path: "/images/4.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: [
            "node", 
            "mongo", 
            "react"
        ],
        key_techs: [
          "React",
          "Redux",
          "Node",
          "Express",
          "Mongo",
          "REST API",
          "Bootstrap"
        ],
    },
    {
        id: 5,
        name: "Football App",
        description: "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat",
        image_path: "/images/5.jpg",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: [
            "react"
        ],
        key_techs: [
            "React", 
            "Redux", 
            "Firebase Auth", 
            "API", 
            "Sass", 
            "Bootstrap"
        ],
    },
]