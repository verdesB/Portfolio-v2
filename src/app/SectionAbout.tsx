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
                <p className="about__text">On sait depuis longtemps que travailler avec du texte lisible et contenant du
                    sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
                    L&apos;avantage du Lorem Ipsum sur un texte générique comme &apos;Du texte. Du texte. Du
                    texte.&apos; est qu&apos;il possède une distribution de lettres plus ou moins normale, et en tout
                    cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou
                    éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche
                    pour &apos;Lorem Ipsum&apos; vous conduira vers de nombreux sites qui n&apos;en sont encore
                    qu&apos;à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par
                    accident, souvent intentionnellement (histoire d&apos;y rajouter de petits clins d&apos;oeil, voire
                    des phrases embarassantes).</p>
            </div>
            <Separator orientation={isLargeScreen ? 'vertical' : 'horizontal'} style={{height: isLargeScreen ? 'auto' : '1px', width: isLargeScreen ? '1px' : '100%'}}/>
            <div className="about__boxBottom">
                <Image className="about__image"  src={Illu} alt="seconde photo de benjamin"/>
            </div>
        </section>

    )
}