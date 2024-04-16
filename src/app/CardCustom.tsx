import {Card, CardDescription, CardHeader} from "@/app/components/ui/Card";
import Image from "next/image";
import webtune from '../../public/homepage2.png'
import {Separator} from "@/app/components/ui/Separator";
import react from '../../public/react.png'
import nest from '../../public/nest.png'
import prisma from '../../public/prisma.png'
import graphql from '../../public/graphql.png'
import {PinContainer} from "@/app/components/ui/3dPin";

export default function CardCustom() {
    return(
        <PinContainer className="h-full w-full" title="test" href="www.google.com">
        <Card className="card">
            <CardHeader className="card__header">
                <Image className="card__cover" src={webtune} alt="logo Webtune"/>
            </CardHeader>
            <CardDescription className="card__description">
                <h4 className="card__title">Webtune</h4>
                <Separator/>
                <ul className="card__listItem">
                    <li className="card__item" ><Image src={react} alt="react"/></li>
                    <li className="card__item" ><Image src={nest} alt="nest"/></li>
                    <li className="card__item" ><Image src={graphql} alt="grapqhQL"/></li>
                    <li className="card__item" ><Image src={prisma} alt="prisma"/></li>
                </ul>
                <Separator/>
                <p className="card__text">hello</p>
            </CardDescription>
        </Card>
        </PinContainer>
    )
}
