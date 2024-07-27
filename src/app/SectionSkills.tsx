import './Skills.scss'
import Image from "next/image";
import react from "../../public/react.png";
import sass from "../../public/sass.png";
import node from '../../public/nodeExpress.jpg'
import nest from '../../public/nest.png'
import graphql from '../../public/graphql.png'
import prisma from '../../public/prisma.png'
import mysql from '../../public/mySQL.png'
import postgres from '../../public/postgres.png'
import {Separator} from "@/app/components/ui/Separator";
import SceneFallingObjects from "@/app/components/3D/Scenes/SceneFallingObjects";

export default function SkillsSection() {
    return (
        <section id="skills" className="skills">
            <div className="skills__boxTop">
                <h2 className="skills__title">SKILLS</h2>
                <div className="skills__subContainer">
                    <SceneFallingObjects/>
                </div>

            </div>
            <Separator className="separatorHorizontal"/>
            <Separator className="separatorVertical"/>
            <div className="skills__boxBottom">
                <ul className="skills__listItem">
                    <li className="skills__item">ADAPTABILITE</li>
                    <li className="skills__item">PERSEVERENCE</li>
                    <li className="skills__item">ENGAGEMENT</li>
                    <li className="skills__item">CURIOSITE</li>
                    <li className="skills__item">PERFECTIONNISTE</li>
                    <li className="skills__item">ENTHOUSIASTE</li>
                    <li className="skills__item">HUMAIN</li>
                </ul>

            </div>
        </section>
    )
}


//<div className="skills__subBox">
//    <h5 className="skills__subTitle">FRONT-END</h5>
//    <Image className="skills__img" src={react} alt="react"/>
//    <Image className="skills__img" src={sass} alt="sass"/>
//
//</div>
//<div className="skills__subBox">
//    <h5 className="skills__subTitle">BACK-END</h5>
//    <Image className="skills__img" src={node} alt="node"/>
//    <Image className="skills__img" src={nest} alt="nest"/>
//    <Image className="skills__img" src={graphql} alt="graphql"/>
//    <Image className="skills__img" src={prisma} alt="prisma"/>
//
//</div>
//<div className="skills__subBox">
//    <h5 className="skills__subTitle">DATABASE</h5>
//    <Image className="skills__img" src={mysql} alt="MySQL"/>
//    <Image className="skills__img" src={postgres} alt="PostgreSQL"/>
//
//</div>