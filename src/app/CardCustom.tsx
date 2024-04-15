import {Card, CardDescription, CardHeader} from "@/app/components/ui/Card";
import Image from "next/image";
import webtune from '../../public/homepage2.png'
import {Separator} from "@/app/components/ui/Separator";
import react from '../../public/react.png'
import nest from '../../public/nest.png'
import prisma from '../../public/prisma.png'
import graphql from '../../public/graphql.png'

export default function CardCustom() {
    return(
        <Card style={{height: '30rem', padding: '0.5rem', display: 'flex',flexDirection: 'column', gap: '1rem'}}>
            <CardHeader style={{padding: '0'}}>
                <Image style={{borderRadius: '0.5rem', height: '10rem', objectFit: 'cover'}} src={webtune} alt="logo Webtune"/>
            </CardHeader>
            <CardDescription style={{display: "flex",flexDirection: 'column', gap: '0.5rem'}}>
                <h4>Webtune</h4>
                <Separator/>
                <ul style={{display: "flex",gap: '1rem'}}>
                    <li style={{height: '2rem',width : '2rem',borderRadius: '1rem'}}><Image style={{borderRadius: '1rem'}} src={react} alt="react"/></li>
                    <li style={{height: '2rem',width : '2rem'}}><Image style={{borderRadius: '1rem'}} src={nest} alt="nest"/></li>
                    <li style={{height: '2rem',width : '2rem'}}><Image style={{borderRadius: '1rem'}} src={graphql} alt="grapqhQL"/></li>
                    <li style={{height: '2rem',width : '2rem'}}><Image style={{borderRadius: '1rem'}} src={prisma} alt="prisma"/></li>
                </ul>
                <Separator/>
                <p>hello</p>
            </CardDescription>
        </Card>
    )
}
