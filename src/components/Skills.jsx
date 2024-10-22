import "./Skills.css"
import html from "../img/Html.png"
import css from "../img/Css.png"
import sass from "../img/SassC.png"
import bootstrap from "../img/bootstrap.png"
import tailwand from "../img/tailwand.png"
import javascript from "../img/JS.png"
import react from "../img/Reactt.png"
import vite from "../img/vite.png"
import git from "../img/git.png"
import nodejs from "../img/nodeJs.png"
import electron from "../img/Electron.svg"
import typescript from "../img/Typescript.png"
import { easeOut, motion } from 'framer-motion';
import { useTranslation } from "react-i18next"

const images=[
    {
        text:"Html",
        src: html,
    },
    {
        text:"Css",
        src: css,
    },
    {
        text:"Sass",
        src: sass,
    },
    {
        text:"Bootstrap",
        src: bootstrap,
    },
    {
        text:"Tailwind",
        src: tailwand,
    },
    {
        text:"JavaScript",
        src: javascript,
    },
    {
        text:"React",
        src: react,
    },
    {
        text:"Vite",
        src: vite,
    },
    {
        text:"Git",
        src: git,
    },
    {
        text:"Electron",
        src: electron,
    },
    {
        text:"TypeScript",
        src: typescript,
    },
    {
        text:"Node.js",
        src: nodejs,
    }
];

function Skills() {
  const { t } =useTranslation();
  const words=[
    {
        key:1,
        word: t("experience1"),
    },
    {
        key:2,
        word: t("experience2"),
    },
    {
        key:3,
        word: t("experience3"),
    },
    {
        key:4,
        word: t("experience4"),
    },
    {
        key:5,
        word: t("experience5"),
    }
];
  return (
    <section id="skills" className="skills">
        <div className="container">
            <h1 className="skills-title">{t("skills")}</h1>
            <div className="skills-center">
                <ul className="skills-list">
                    {images.map((item,index)=>(
                        <motion.li whileInView={{ y:[100, 1] }} transition={{ duration:0.5 , ease:easeOut}} key={index} className="skills-item">
                            <img className="skills-img" src={item.src} alt="" />
                            <p className="skills-text">{item.text}</p>
                        </motion.li>
                    ))}
                </ul>
                <motion.h1 whileInView={{ y:[100, 1] }} transition={{duration:0.5}}  className="skills-subtitle">{t("experienceDate")}</motion.h1>
                <div className="skills-right">
                    <h1 className="skills-subtitles">{t("frontendDev")}</h1>
                    <p className="skills-letters">{t("itTime")}</p>
                    {words.map((word,index)=>(
                        <motion.p key={index} whileInView={{ y:[100, 1] }} transition={{duration:0.5}} className="skills-words">{word.word}</motion.p>
                    ))}
                </div>
            </div>
            <h1 className="skills-copyright">@2024 Sattorov Shohruh</h1>
        </div>
    </section>
  )
}

export default Skills
