import {Card} from "@/app/components/ui/Card";
import {Car, Quote} from "lucide-react";
import {Highlight} from "@/app/CardsMotionCustom";
import oclock from '../../../../../public/oclock.png'
import {Avatar} from "@/app/components/ui/Avatar";
import Image from 'next/image';
import bedev from '../../../../../public/bedevagency_logo.jpg'
import './Feedbacks.scss'

const FeedBacks = () => {
    console.log()
    return (
        <section id="feedback" className="feedbacks">
            <h2 className="feedbacks__title">Feedbacks</h2>
            <div className="feedbacks__cardsContainer">
                <div className="feedbacks__card">
                    <Quote className="feedbacks__icon "/>
                    <p >
                        Benjamin est un<Highlight> super collaborateur</Highlight>
                    </p>
                    <p >Durant son stage au sein de notre ASBL, il a su se démarquer par
                        sa <Highlight>motivation</Highlight>, sa <Highlight>détermination</Highlight> et
                        son <Highlight>professionnalisme</Highlight>.</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p >Nous l'avons d'ailleurs sélectionné pour s'associer avec nous sur l'un
                        de nos projets.</p>
                    <p >Il a depuis repris les rênes du développement de cette
                        application.</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p >Si nous engagions, il ne fait aucun doute qu'il aurait déjà rejoint
                        notre équipe.</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p >Ben est un développeur talentueux avec une
                        grande <Highlight>volonté</Highlight> d'apprendre et d'évoluer,
                        un <Highlight>curieux</Highlight> dans l'âme que je recommande aux entreprises en recherche de
                        ninja du code.</p>
                    <div className="feedbacks__boxAuthor">
                        <Avatar><Image src={bedev} alt="bedev"/></Avatar>
                        <div >
                        <p>CEO @Bedev & Administrator @HDM Network ASBL</p>
                        <p>Quentin Mousset</p>
                        </div>
                    </div>

                </div>
                <div className="feedbacks__card">
                    <Quote className="feedbacks__icon"/>
                    <p>Ton <Highlight>enthousiasme</Highlight> et
                        ton <Highlight>professionnalisme</Highlight> ont clairement marqué le jury.</p>
                    <p> Ces qualités sont des atouts majeurs dans le monde professionnel,
                        surtout dans le secteur du développement web et web mobile. Elles témoignent de ta capacité à
                        t’engager pleinement dans tes projets et à travailler en équipe, des compétences très appréciées
                        dans le milieu.</p>
                    <p>Benjamin, tu as démontré une très <Highlight>belle
                        personnalité</Highlight> et un gros potentiel lors de ta présentation.</p>
                    <p> Le jury a été impressionné par ta démarche et ton parcours.
                        Ta <Highlight>passion</Highlight> et ta <Highlight>détermination</Highlight> sont les clés de
                        ton succès futur. Félicitations encore pour ton admission.
                    </p>
                    <div className="feedbacks__boxAuthor">
                        <Avatar><Image src={oclock} alt="oclock"/></Avatar>
                        <div>
                        <p>O'Clock</p>
                        <p>Le jury</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default FeedBacks;