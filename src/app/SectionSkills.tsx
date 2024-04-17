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

export default function SkillsSection() {
    return (
        <section id="skills" className="skills">
            <div className="skills__boxTop">
                <h2 className="skills__title">Skills</h2>
                <div className="skills__subContainer">
                    <div className="skills__subBox">
                        <h5 className="skills__subTitle">Front-End</h5>
                        <Image className="skills__img" src={react} alt="react"/>
                        <Image className="skills__img" src={sass} alt="sass"/>

                    </div>
                    <div className="skills__subBox">
                        <h5 className="skills__subTitle">Back-End</h5>
                        <Image className="skills__img" src={node} alt="node"/>
                        <Image className="skills__img" src={nest} alt="nest"/>
                        <Image className="skills__img" src={graphql} alt="graphql"/>
                        <Image className="skills__img" src={prisma} alt="prisma"/>

                    </div>
                    <div className="skills__subBox">
                        <h5 className="skills__subTitle">Database</h5>
                        <Image className="skills__img" src={mysql} alt="MySQL"/>
                        <Image className="skills__img" src={postgres} alt="PostgreSQL"/>

                    </div>
                </div>

            </div>
            <Separator  className="separatorHorizontal"/>
            <Separator  className="separatorVertical"/>
            <div className="skills__boxBottom">
                <ul className="skills__listItem">
                    <li className="skills__item">Adaptabilité</li>
                    <li className="skills__item">Perseverence</li>
                    <li className="skills__item">Engagement</li>
                    <li className="skills__item">Curiosité</li>
                    <li className="skills__item">Perfectioniste</li>
                    <li className="skills__item">Bon relationel</li>
                </ul>

            </div>
        </section>
    )
}