'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Stack.scss';
import react from '../../../../../public/react.png';
import next from '../../../../../public/next-js.svg';
import sass from '../../../../../public/sass.png';
import graphql from '../../../../../public/graphql.png';
import nest from '../../../../../public/nest.png';
import prisma from '../../../../../public/prisma.png';
import postgres from '../../../../../public/postgres.png';
import Image from "next/image";

const Stack = () => {
    const images = [
        { src: react, alt: 'React' },
        { src: next, alt: 'Next' },
        { src: sass, alt: 'Sass' },
        { src: graphql, alt: 'GraphQL' },
        { src: nest, alt: 'Nest' },
        { src: prisma, alt: 'Prisma' },
        { src: postgres, alt: 'PostgreSQL' }
    ];

    const imageWidth = 100; // largeur d'une seule image en px

    const infiniteScroll = {
        x: [0, -imageWidth * images.length], // déplacement de 0 à la fin du tableau
        transition: {
            x: {
                repeat: Infinity, // boucle infinie
                repeatType: 'loop', // évite de revenir brutalement au début
                duration: 30, // ajustez cette valeur pour contrôler la vitesse du défilement
                ease: 'linear' // défilement linéaire, continu et fluide
            }
        }
    };

    return (
        <div className="stack">
            <motion.div
                className="stack__container"
                animate={infiniteScroll}
                style={{ display: 'flex', whiteSpace: 'nowrap' }}
            >
                {images.concat(images).map((image, index) => (
                    <div
                        key={index}
                        className="stack__item"
                        style={{ display: 'inline-block', width: imageWidth }}
                    >

                        <Image
                            src={image.src.src}
                            alt={image.alt}
                            className="stack__image"
                            style={{ width: '100%' }}
                            layout="responsive" width={16} height={9}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Stack;
