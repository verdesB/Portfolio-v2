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
        <section className="skills">
            <div className="skills__boxTop">
                <h2 className="skills__title">Skills</h2>
                <div className="skills__subContainer">
                    <div className="skills__subBox">
                        <h5>Front-End</h5>
                        <Image className="skills__img" src={react} alt="react"/>
                        <Image className="skills__img" src={sass} alt="sass"/>

                    </div>
                    <div className="skills__subBox">
                        <h5>Back-End</h5>
                        <Image className="skills__img" src={node} alt="node"/>
                        <Image className="skills__img" src={nest} alt="nest"/>
                        <Image className="skills__img" src={graphql} alt="graphql"/>
                        <Image className="skills__img" src={prisma} alt="prisma"/>

                    </div>
                    <div className="skills__subBox">
                        <h5>Database</h5>
                        <Image className="skills__img" src={mysql} alt="MySQL"/>
                        <Image className="skills__img" src={postgres} alt="PostgreSQL"/>

                    </div>
                </div>

            </div>
            <Separator/>
            <div className="skills__boxBottom">
                <ul>
                    <li>Adaptabilité</li>
                    <li>Perseverence</li>
                    <li>Engagement</li>
                    <li>Curiosité</li>
                    <li>Perfectioniste</li>
                    <li>Bon relationel</li>
                </ul>

            </div>
        </section>
    )
}