"use client"
import Image  from 'next/image';
import Illu from '../../public/OIG3.jpg'
import './About.scss'
import {Separator} from "@/app/components/ui/Separator";
import {useLargeScreen} from "@/app/hooks/useLargeScreen";

export default function AboutSection() {
    const isLargeScreen = useLargeScreen()
    return (
        <section id="about" className="about">
            <div className="about__boxTop">
                <h2 className="about__title">About</h2>
                <p className="about__text">Bonjour, je m&apos;appelle Benjamin Verdes. À l&apos;âge de 28 ans, après
                    avoir sillonné la France et vécu de multiples expériences professionnelles diverses, j&apos;ai
                    décidé de poser mes valises en Île-de-France. Ma passion pour le dynamisme et l&apos;innovation
                    m&apos;a conduit à me lancer dans le développement web. </p>
                <p className="about__text">Je suis constamment à la recherche de nouvelles opportunités pour développer
                    mes compétences et contribuer à des projets passionnants. Mon objectif est de créer des solutions
                    web intuitives et efficaces qui répondent aux besoins des utilisateurs.</p>
                <p className="about__text">Si vous souhaitez en savoir plus sur mon travail ou discuter
                    d&apos;opportunités, n&apos;hésitez pas à me contacter.</p>
            </div>
            <Separator orientation={isLargeScreen ? 'vertical' : 'horizontal'}
                       style={{height: isLargeScreen ? 'auto' : '1px', width: isLargeScreen ? '1px' : '100%'}}/>
            <div className="about__boxBottom">
                <Image className="about__image" src={Illu} alt="seconde photo de benjamin"/>
            </div>
        </section>
    )
}