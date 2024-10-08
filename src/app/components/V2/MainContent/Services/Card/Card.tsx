import React from "react";
import { Card } from "@/app/components/ui/Card";
import {Cog, Monitor, PencilRuler, Rocket} from "lucide-react";
import './Card.scss'
const CardCustom = () => {
    const datas = [
        {
            icon: <PencilRuler />,
            title: "Etude et maquettage du projet",
            description: <ul className="card__listItems">
                <li className="card__item">Premier rendez-vous afin de discuter de vos idées concernant votre
                    projet
                </li>
                <li className="card__item">Analyse appronfondie de votre cahier des charges</li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li className="card__item">Elaboration d\'une maquette graphique responsive afin de définir
                    clairement les contours du projet
                </li>
                <li className="card__item">Selon le type de projet, Création du schéma de la base de données</li>
                <li className="card__item">Je choisi les technologies nécessaires selon les besoins du projet
                </li>
                <li className="card__item">Choix des technologies à utilisée selon le type de projet.</li>
            </ul>
        },
        {
            icon: <Monitor/>,
            title: "Développement du Front-End",
            description:
                <ul className="card__listItems">

                <li className="card__item">Conception d'une structure de base pour l’interface utilisateur, en
                    tenant compte de l’ergonomie et de l’expérience utilisateur.
                </li>

                <li className="card__item">Mise en place des styles et des animations pour rendre
                    l’interface attrayante et intuitive.
                </li>
                <li className="card__item">Je teste l’interface utilisateur pour m’assurer qu’elle fonctionne
                    correctement et qu’elle offre une expérience utilisateur fluide.
                </li>
                <li className="card__item">Je procède aux ajustements nécessaires en fonction des retours et des
                    tests pour garantir la qualité et la performance de l’interface.
                </li>
</ul>
        },
        {
            icon: <Cog/>,
            title: "Développement du Back-End",
            description: <ul className="card__listItems">
                <li className="card__item">Création de  l’architecture serveur  en mettant l’accent sur la robustesse et la scalabilité de l’application.</li>
                <li className="card__item">Création de la base de données si nécessaire au projet</li>

                <li style={{marginTop: '0.5rem'}}>Implémentation de la logique métier</li>

            </ul>
        },
        {
            icon: <Rocket/>,
            title: "Deploiement du projet",
            description: <ul className="card__listItems">
                <li className="card__item">Mise en ligne de votre projet</li>
                <li className="card__item">Mise en place du HTTPS afin de garantir la sécurité de vos utilisateurs</li>
                <li className="card__item">Suivi de votre projet , selon le contrat établi</li>
            </ul>
        }
    ];

    return (
        <>
            {datas.map((data, index) => (
                <Card
                    key={index}
                    style={{
                        height: '30rem',
                        width: '27rem',
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        backdropFilter: 'blur(10px)',
                        padding: '1rem'
                    }}
                >
                    {data.icon}
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </Card>
            ))}
        </>
    );
}

export default CardCustom;
