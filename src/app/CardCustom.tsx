import {Card, CardDescription, CardHeader} from "@/app/components/ui/Card";
import Image from "next/image";
import webtune from '../../public/homepage2.png'
import {Separator} from "@/app/components/ui/Separator";
import react from '../../public/react.png'
import nest from '../../public/nest.png'
import prisma from '../../public/prisma.png'
import graphql from '../../public/graphql.png'
import {PinContainer} from "@/app/components/ui/3dPin";
import {useLargeScreen} from "@/app/hooks/useLargeScreen";

type CardCustomProps = {

    cover: any;
    name: string;
    technos: any[];
    descriptions: string[];
    link: string;
};

export default function CardCustom({cover, name, technos, descriptions, link}: CardCustomProps) {
    const isLargeScreen = useLargeScreen()
    return(
        <>
        {isLargeScreen?  <PinContainer className="h-full w-full" title="test" href="www.google.com">
                <Card className="card">
                    <CardHeader className="card__header">
                        <Image className="card__cover" src={cover} alt="logo Webtune"/>
                    </CardHeader>
                    <CardDescription className="card__description">
                        <h4 className="card__title">{name}</h4>
                        <Separator/>
                        <ul className="card__listItem">
                            {technos.map((techno, index) => (
                                <li className="card__item" key={index}>
                                    <Image className="card__item" src={techno} alt={techno}/>
                                </li>
                            ))}
                        </ul>
                        <Separator/>
                        {descriptions.map((description, index) => (
                            <p className="card__text" key={index}>{description}</p>
                        ))
                        }
                    </CardDescription>
                </Card>
            </PinContainer> :
        <Card className="card">
            <CardHeader className="card__header">
                <Image className="card__cover" src={webtune} alt="logo Webtune"/>
            </CardHeader>
            <div className="card__description">
                <h4 className="card__title">{name}</h4>
                <Separator/>
                <ul className="card__listItem">
                    {technos.map((techno, index) => (
                        <li className="card__item" key={index}>
                            <Image className="card__item" src={techno} alt={techno}/>
                        </li>
                    ))}
                </ul>
                <Separator/>
                {descriptions.map((description, index) => (
                    <p className="card__text" key={index}>{description}</p>
                ))
                }
            </div>
        </Card>
        }
        </>

    )
}
