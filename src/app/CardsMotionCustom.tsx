"use client";
import { CardStack } from "./components/ui/CardsMotion";
import { cn } from "./utils/cn";
import '../app/Feedback.scss'
export function CardStackDemo() {
    return (
        <div className="motionContainer  flex items-center justify-center w-full">
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                " font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 ",
                className
            )}
        >
      {children}
    </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Jury",
        designation: "O'Clock - TP 2024",
        content: (
            <>
                <p className="feedback__text">Ton <Highlight>enthousiasme</Highlight> et ton <Highlight>professionnalisme</Highlight> ont clairement marqué le jury.</p>
                <p className="feedback__text"> Ces qualités sont des atouts majeurs dans le monde professionnel, surtout dans le secteur du développement web et web mobile. Elles témoignent de ta capacité à t’engager pleinement dans tes projets et à travailler en équipe, des compétences très appréciées dans le milieu.</p>
                <p className="feedback__text">Benjamin, tu as démontré une très <Highlight>belle personnalité</Highlight> et un gros potentiel lors de ta présentation.</p>
                <p className="feedback__text"> Le jury a été impressionné par ta démarche et ton parcours.
                Ta <Highlight>passion</Highlight>  et ta <Highlight>détermination</Highlight>  sont les clés de ton succès futur. Félicitations encore pour ton admission.
            </p>
            </>
        ),
    },
    {
        id: 1,
        name: "Quentin Mousset",
        designation: "CEO @Bedev & Administrator @HDM Network ASBL",
        content: (
            <>
            <p className="feedback__text">
                Benjamin est un<Highlight> super collaborateur</Highlight>
            </p>
                <p className="feedback__text">Durant son stage au sein de notre ASBL, il a su se démarquer par sa <Highlight>motivation</Highlight>, sa <Highlight>détermination</Highlight> et son <Highlight>professionnalisme</Highlight>.</p>
                <p className="feedback__text">Nous l'avons d'ailleurs sélectionné pour s'associer avec nous sur l'un de nos projets.</p>
                <p className="feedback__text">Il a depuis repris les rênes du développement de cette application.</p>
                <p className="feedback__text">Si nous engagions, il ne fait aucun doute qu'il aurait déjà rejoint notre équipe.</p>
                <p className="feedback__text">Ben est un développeur talentueux avec une grande <Highlight>volonté</Highlight> d'apprendre et d'évoluer, un <Highlight>curieux</Highlight> dans l'âme que je recommande aux entreprises en recherche de ninja du code.</p>
            </>
        ),
    },

];
