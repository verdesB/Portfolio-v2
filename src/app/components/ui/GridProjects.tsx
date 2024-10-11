"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import webtune from '../../../../public/logo.png'
import galerie from '../../../../public/showroomRTF.png'
import threejs from '../../../../public/three.png'
import nextjs from '../../../../public/next-js.svg'

import reactIcon from '../../../../public/react.png'
import graphql from '../../../../public/graphql.png'
import nest from '../../../../public/nest.png'
import prisma from '../../../../public/prisma.png'
import sql from '../../../../public/mySQL.png'
import {
    CalendarPlus2,
    FilePenLine,
    Folders,
    HandPlatter,
    LayoutDashboard,
    ServerCog,
    SquareLibrary
} from "lucide-react";


export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[800px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200  text-3xl"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-xl
                                            "
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-[90%] md:h-fit pb-10 flex flex-col max-h-[50vh] items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] no-visible-scrollbar"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-40 mb-16">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer h-802 w-full md:w-[30rem]"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-60 w-full  rounded-lg object-cover object-center"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Application de gestion de réseaux sociaux",
        title: "Webtune",
        src: webtune.src,
        ctaText: "Visit",
        ctaLink: "/",
        content: () => {

            return (
                <div style={{
                    flex: 1,
                    maxHeight: '80rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    marginBottom: '5rem'
                }} className="no-visible-scrollbar">
                    <ul style={{display: 'flex', height: '3rem', gap: "1rem", marginBottom: '2rem'}}>
                        <li style={{height: '100%'}}><Image src={reactIcon} alt={"React JS"}
                                                            style={{height: '100%', width: '3rem'}}/></li>
                        <li style={{height: '100%'}}><Image style={{height: '100%', width: '3rem'}} src={graphql}
                                                            alt={"GraphQL"}/></li>
                        <li style={{height: '100%'}}><Image style={{height: '100%', width: '3rem'}} src={nest}
                                                            alt={"Nest JS"}/></li>
                        <li style={{height: '100%'}}><Image style={{height: '100%', width: '3rem'}} src={prisma}
                                                            alt={"Prisma ORM"}/></li>
                        <li style={{height: '100%'}}><Image style={{height: '100%', width: '3rem'}} src={sql}
                                                            alt={"mySql"}/></li>
                    </ul>
                    <div>
                        <h4 style={{fontSize: '1.5rem',marginBottom: '1rem'}}>Problématique :</h4>
                        <p style={{fontSize: '1rem'}}>
                            Aujourd&apos;hui, la gestion des réseaux sociaux peut sembler très répétitive et chronophage. Lorsqu&apos;il s&apos;agit de gérer plusieurs réseaux sociaux, la tâche devient encore plus complexe, nécessitant de changer d&apos;application pour chaque publication, ce qui rend le processus inefficace et fastidieux.
                            Et décourageant pour les personnes qui ne sont pas forcement en phase avec les réseaux sociaux tel que moi ! #Boomer
                        </p>

                    </div>
                    <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                        <h4 style={{fontSize: '1.5rem'}}>Solution et fonctionnalitées :</h4>

                        <p style={{fontSize: '1rem'}}>
                            Pour répondre à cette problématique, j&apos;ai décidé de développer une application qui permettra de gérer tous les réseaux sociaux en un seul et même endroit. Cela vise à minimiser le processus fastidieux et répétitif tout en maximisant la présence de l&apos;utilisateur sur ses réseaux. Grâce à un formulaire, l&apos;utilisateur pourra créer plusieurs contenus de publication adaptés à chaque format et réseau. En centralisant ses différents réseaux sociaux, il sera possible d&apos;ajouter une couche d&apos;organisation avec la programmation des publications, permettant ainsi de gérer son organisation comme souhaité.
                        </p>
                        <ul style={{width: '100%',fontSize: '1rem'}}>
                            <li style={{display: 'flex', alignItems: 'flex-start', gap:'0.5rem',margin: '1rem 0'}}><LayoutDashboard style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>
                                Intégration d&apos;un dashboard</p>
                            </li>
                            <li style={{display: 'flex', alignItems: 'flex-start', width: "100%", gap: '0.5rem',margin: '1rem 0'}}><CalendarPlus2 style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Intégration et implémentation d&apos;un calendrier éditorial, avec CRUD pour la publication</p></li>
                            <li style={{display: 'flex', alignItems: 'flex-start', width: "100%", gap: '0.5rem',margin: '1rem 0'}}><Folders style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Un espace regroupant tout les posts crées sur l&apos;application organisé par campagne</p></li>
                            <li style={{display: 'flex', alignItems: 'flex-start',width: "100%", gap: '0.5rem',margin: '1rem 0'}}><FilePenLine style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Un espace d&apos;édition de publications, avec accès à L&apos;API de Unsplash pour des images libres de droits, et DALL-E pour la génération d&apos;images  par IA</p></li>
                            <li style={{display: 'flex', alignItems: 'flex-start', width: "100%", gap: '0.5rem',margin: '1rem 0'}}><SquareLibrary style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Un espace médiathèque permettant a l&apos;utilisateur de stocker de simages , afin de les éditer, avec les editeurs d&apos;images et video prevu pour la deuxième phase de développement du projet</p></li>
                            <li style={{display: 'flex', alignItems: 'flex-start', width: "100%", gap: '0.5rem',margin: '1rem 0'}}><ServerCog style={{width: '1.5rem', height: '1.5rem'}}/><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Développement du back end de l&apos;application en adéquation avec les fonctionnalitées présenté ci dessus</p></li>
                            <li style={{display: 'flex', alignItems: 'flex-start', width: "100%", gap: '0.5rem',margin: '1rem 0'}}><HandPlatter style={{width: '1.5rem', height: '1.5rem'}} /><p style={{width:'calc(100% - 1.5rem)',height: '100%'}}>Application connecté avec Facebook, Instagram et LinkedIn. (Tiktok, snapchat,pinterest et X sont prévus à l&apos;avenir)</p></li>
                        </ul>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        width: "100%",
                        borderRadius: '2rem',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    }}>
                        <video style={{height: "100%", width: '100%', borderRadius: '1.5rem',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} controls>
                            <source style={{borderRadius: '1rem'}} src="/webtune.mp4" type="video/mp4"/>
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                </div>

            );
        },
    },
    {
        description: "Portfolio d'une artiste en 3D",
        title: "Galerie d'art 3D",
        src: galerie.src,
        ctaText: "Visit",
        ctaLink: "https://showroom-rtf.vercel.app/",
        content: () => {
            return (
                <div style={{
                    flex: 1,
                    maxHeight: '80rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    marginBottom: '5rem'
                }} className="no-visible-scrollbar">
                    <ul style={{display: 'flex', height: '3rem', gap: "1rem", marginBottom: '2rem'}}>
                        <li style={{height: '100%'}}><Image src={nextjs} alt={"Next JS"}
                                                            style={{height: '100%', width: '3rem'}}/></li>
                        <li style={{height: '100%'}}><Image style={{height: '100%', width: '3rem'}} src={threejs}
                                                            alt={"Three JS"}/></li>
                    </ul>
                    <div>
                        <h4 style={{fontSize: '1.5rem',marginBottom: '0.5rem'}}>Problématique :</h4>
                        <p>
                            Si vous voyez ce message , en espérant avoir amples informations sur ce projet , je suis
                            dans le regret de vous annoncer que malheuresement , je suis a l&apos;heure ou je vous parle
                            en train de mettre à jour le portfolio sur lequel vous vous trouvez
                        </p>

                    </div>
                    <div>
                        <h4 style={{fontSize: '1.5rem',marginBottom: '0.5rem'}}>Solution et fonctionnalitées :</h4>

                        <p>
                            Si vous voyez ce message , en espérant avoir amples informations sur ce projet , je suis
                            dans le
                            regret de vous annoncer que malheuresement , je suis a l&apos;heure ou je vous parle en
                            train de
                            mettre à jour le portfolio sur lequel vous vous trouvez
                        </p>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        width: "100%",
                        borderRadius: '2rem'
                    }}>
                        <video style={{height: "100%", width: '100%', borderRadius: '1.5rem',}} controls>
                            <source style={{borderRadius: '1rem'}} src="/threejs.mp4" type="video/mp4" />

                        </video>

                    </div>
                </div>
            );
        },
    },


];


