import './MainContent.scss'
import {ExpandableCardDemo} from "@/app/components/ui/GridProjects";
import {Separator} from "@/app/components/ui/Separator";
import {Highlight} from "@/app/CardsMotionCustom";
import {BatteryCharging, ContactRound, HandHeart, Target} from "lucide-react";
import {GoogleGeminiEffect} from "@/app/components/ui/GeminiEffect";
import Services from "@/app/components/V2/MainContent/Services/Services";
const MainContent = () => {
    console.log()
    return (
        <section className="mainContent">
            <h2 className="mainContent__title">Explorez mon Univers ...</h2>
            <h3 id="about" className="mainContent__subTitle"><Highlight>A propos</Highlight></h3>
            <div className="mainContent__boxAboutText">
                <div className="mainContent__subBoxText">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="mainContent__text"><span><ContactRound /></span>Je m’appelle Benjamin, et je suis développeur web fullstack. Depuis toujours, j’ai été attiré par l'informatique, ce qui m’a naturellement conduit à choisir cette carrière. Ce qui me motive chaque jour, c’est la possibilité de pouvoir créer , développer des solutions faire une différence et d’apporter une valeur ajoutée à travers mon travail.</p>
                    <p className="mainContent__text"><span><Target /></span>Ce qui me pousse à aimer ce métier, c’est la capacité du numérique à simplifier la vie et à nous faire gagner du temps précieux. J’aime l’idée de pouvoir utiliser la technologie pour rendre les tâches quotidiennes plus efficaces et permettre aux gens de se concentrer sur ce qui compte vraiment pour eux.</p>
            </div>
                <div className="mainContent__subBoxText">
                    <p className="mainContent__text"><span><HandHeart /></span>Au-delà des compétences techniques, je crois fermement en l’importance des relations humaines et de la collaboration. Pour moi, chaque projet est une opportunité de créer des liens, d’apprendre des autres et de grandir ensemble. J’accorde une grande importance à l’écoute, à l’empathie et à la communication, car je suis convaincu que ce sont ces qualités qui permettent de réaliser des projets véritablement exceptionnels.</p>
                    <p className="mainContent__text"><span><BatteryCharging /></span>En dehors du travail, j’aime faire de la moto, profiter des choses simples, ce qui m’aide à garder un équilibre et à rester inspiré. Je suis toujours à la recherche de nouvelles expériences et de défis qui me permettent de m’épanouir tant sur le plan professionnel que personnel.</p>
                </div>
                <div>
                    <p className="mainContent__lastText">N’hésitez pas à me contacter pour discuter de collaborations
                        potentielles ou simplement pour échanger sur nos passions communes.</p>
                    <p className="mainContent__lastText"> Je serais ravi de faire votre connaissance et de partager avec vous ma vision et mon
                        enthousiasme pour votre projet.</p>
                </div>

            </div>
            <Separator className="w-[80%] mx-auto"/>
            <h3 id="services" className="mainContent__subTitle"><Highlight>Mes services</Highlight></h3>
            <Services/>
            <Separator id="projects" className="w-[80%] mx-auto"/>
            <h3 className="mainContent__subTitle"><Highlight>Découvrez Mes Dernières Créations Web</Highlight></h3>
            <div  className="mainContent__projectBox">
                <ExpandableCardDemo/>
            </div>
        </section>

    )
}
export default MainContent;