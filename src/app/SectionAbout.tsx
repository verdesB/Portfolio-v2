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
                <p className="about__text">Salut, moi c&apos;est Benjamin Verdes. À 28 ans, après avoir fait le tour de
                    la France et vécu plein d&apos;aventures pro, j&apos;ai décidé de m&apos;installer en Île-de-France.
                    J&apos;ai toujours été attiré par le dynamisme et l&apos;innovation, alors je me suis lancé dans le
                    dev web. </p>
                <p className="about__text">Je suis toujours à l&apos;affût de nouvelles opportunités pour booster mes
                    compétences et participer à des projets qui déchirent. Mon but ? Créer des solutions web qui sont à
                    la fois intuitives et efficaces, et qui répondent aux besoins des utilisateurs.</p>
                <p className="about__text">Si tu veux en savoir plus sur ce que je fais ou discuter d&apos;opportunités,
                    n&apos;hésite pas à me contacter.</p>
            </div>
            <Separator orientation={isLargeScreen ? 'vertical' : 'horizontal'}
                       style={{height: isLargeScreen ? 'auto' : '1px', width: isLargeScreen ? '1px' : '100%'}}/>
            <div className="about__boxBottom">
                <Image className="about__image" src={Illu} alt="seconde photo de benjamin"/>
            </div>
        </section>
    )
}