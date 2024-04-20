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
        designation: "Directeur HDM Network & Bedev",
        content: (
            <p className="feedback__text">
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p className="feedback__text">
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];
