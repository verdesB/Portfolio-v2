'use client'
import {Carousel, CarouselContent, CarouselItem} from "@/app/components/ui/Carousel";
import CardCustom from "@/app/CardCustom";
import {PinContainer} from "@/app/components/ui/3dPin";
import webtune from '../../public/homepage2.png'
import sass from '../../public/sass.png'
import react from '../../public/react.png'
import nest from '../../public/nest.png'
import prisma from '../../public/prisma.png'
import graphql from '../../public/graphql.png'
import node from '../../public/node.png'
import postgres from '../../public/postgres.png'
import sequelize from '../../public/sequelize.png'
import qualiextra from '../../public/qualiextra.jpg'
import mysql from '../../public/mySQL.png'

export default function CarouselCustom() {
    const projects = [
        {
            id: 1,
            cover: webtune,
            name: 'Webtune',
            technos: [nest,react,prisma,graphql,mysql],
            descriptions:['CMS permettant une gestion optimale de ses réseaux sociaux.', 'Gestion centralisé de la plupart des plateformes existantes', 'Possibilité de programmer son contenu'],
            link:'In development',
        },
        {
            id: 2,
            cover:qualiextra,
            name: 'Qualiextra',
            technos: [react, sass,node,sequelize,postgres],
            descriptions:['',''],
            link:'',
        },
        {
            id: 3,
            cover:'',
            name: '',
            technos: ['','',''],
            descriptions:['',''],
            link:'',
        },
    ]
    return(
        <Carousel className="carousel">
            <CarouselContent className="carousel__content">
                {projects.map((project, index) => (
                    <CarouselItem className="carousel__item" key={index}>
                        <CardCustom
                            cover={project.cover}
                            name={project.name}
                            technos={project.technos}
                            descriptions={project.descriptions}
                            link={project.link}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}