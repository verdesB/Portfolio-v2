"use client";
import './Tabs.scss'
import Image from "next/image";
import { Tabs } from "./components/ui/Tabs";
import showroom from "../../public/showroomRTF.png";
import next from "../../public/next.svg";
import three from "../../public/three.png";
import webtune from "../../public/homepage2.png";
import nest from "../../public/nest.png";
import react from "../../public/react.png";
import prisma from "../../public/prisma.png";
import graphql from "../../public/graphql.png";
import mysql from "../../public/mySQL.png";
import qualiextra from "../../public/qualiextra.jpg";
import sass from "../../public/sass.png";
import node from "../../public/node.png";
import sequelize from "../../public/sequelize.png";
import postgres from "../../public/postgres.png";
import plus from "../../public/V.png";
import {Separator} from "@/app/components/ui/Separator";
import {Button} from "@/app/components/ui/Button";

export function TabsProject() {
    const projects = [
        {
            id: 1,
            cover: showroom,
            name: 'SHOWROOM 3D',
            technos: [next, three],
            descriptions: [
                'Galerie d\' arts interactive 3D',
                'Expérience Mobile & Bureau',
            ],
            link: 'https://showroom-rtf.vercel.app'

        },
        {
            id: 1,
            cover: webtune,
            name: 'WEBTUNE',
            technos: [nest,react,prisma,graphql,mysql],
            descriptions:[
                'CMS permettant une gestion optimale de ses réseaux sociaux.', 'Gestion centralisé de la plupart des plateformes existantes',
                'Possibilité de programmer son contenu','Integration d\'un assistant IA'
            ],
            link:'http://webtune.bennydev.fr',
        },
        {
            id: 2,
            cover:qualiextra,
            name: 'QUALIEXTRA',
            technos: [react, sass,node,sequelize,postgres],
            descriptions: [
                'Plateforme en ligne facilitant la mise en relation entre clients et fournisseurs de services dans l\'industrie hôtelière',
                'Application basée sur trois rôles avec son panel de fonctionnalités pour le bon fonctionnement du site'
            ],
            link:'En refonte visuelle',
        },
        {
            id: 3,
            cover: plus,
            name: '',
            technos: [plus],
            descriptions:['Et si s\'était votre projet ?',''],
            link:'',
        },
    ]
    const tabs = [
        {
            title: "SHOWROOM 3JS",
            value: "Showroom-3JS",
            content: (
                <article  className="projectSection text-xl md:text-4xl">
                    <div className="projectSection__tabsHeader">
                    <h3 className="projectSection__title">SHOWROOM 3JS</h3>
                        <div className="projectSection__listContainer">
                            <ul className="projectSection__list">
                                {projects[0].technos.map((techno, index) => (
                                    <li className="projectSection__listItem" key={index}><Image src={techno} alt={`techno-${index}`} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='projectSection__tabsContent'>
                        <div className='projectSection__boxImg'>
                            <Image className="projectSection__img" src={projects[0].cover} alt='showroom'/>
                        </div>
                        <div className="projectSection__boxDescription">
                            <h4 className='projectSection__descriptionTitle'>DESCRIPTION :</h4>
                            <Separator className="projectSection__separator"/>
                            <div className="projectSection__boxListDescription">
                                <ul className="projectSection__listDescription">
                                    {projects[0].descriptions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>

                            </div>
                            <Button className="projectSection__btn" onClick={() => window.open(projects[0].link, '_blank')}>Visiter</Button>

                        </div>
                    </div>
                </article>
            ),
        },
        {
            title: "WEBTUNE",
            value: "webtune",
            content: (
                <article className="projectSection text-xl md:text-4xl">
                    <div className="projectSection__tabsHeader">
                        <h3 className="projectSection__title">WEBTUNE AI</h3>
                        <div className="projectSection__listContainer">
                            <ul className="projectSection__list">
                                {projects[1].technos.map((techno, index) => (
                                    <li className="projectSection__listItem" key={index}><Image src={techno} alt={`techno-${index}`}/>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className='projectSection__tabsContent'>
                        <div className='projectSection__boxImg'>
                            <Image className="projectSection__img" src={projects[1].cover} alt='showroom'/>

                        </div>
                        <div className="projectSection__boxDescription">
                            <h4 className='projectSection__descriptionTitle'>DESCRIPTION :</h4>
                            <Separator className="projectSection__separator"/>
                            <div className="projectSection__boxListDescription">
                                <ul className="projectSection__listDescription">
                                    {projects[1].descriptions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>

                            </div>
                            <Button className="projectSection__btn">Visiter</Button>

                        </div>
                    </div>
                </article>
            ),
        },
        {
            title: "QUALIEXTRA",
            value: "qualiextra",
            content: (
                <div className="projectSection text-xl md:text-4xl">
                    <div className="projectSection__tabsHeader">
                        <h3 className="projectSection__title">QUALI-EXTRA</h3>
                        <div className="projectSection__listContainer">
                            <ul className="projectSection__list">
                                {projects[2].technos.map((techno, index) => (
                                    <li className="projectSection__listItem" key={index}><Image src={techno} alt={`techno-${index}`}/>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className='projectSection__tabsContent'>
                        <div className='projectSection__boxImg'>
                            <Image className="projectSection__img" src={projects[2].cover} alt='showroom'/>

                        </div>
                        <div className="projectSection__boxDescription">
                            <h4 className='projectSection__descriptionTitle'>DESCRIPTION :</h4>
                            <Separator className="projectSection__separator"/>
                            <div className="projectSection__boxListDescription">
                                <ul className="projectSection__listDescription">
                                    {projects[2].descriptions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>

                            </div>
                            <Button className="projectSection__btn">Visiter</Button>

                        </div>
                    </div>
                </div>
            ),
        },

    ];

    return (
        <div
            className="h-[60rem]  [perspective:1000px] relative b flex flex-col max-w-9xl mx-34 w-full  items-start justify-start mb-40">
            <Tabs tabs={tabs}/>
        </div>
    );
}


