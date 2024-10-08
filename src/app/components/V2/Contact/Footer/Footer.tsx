import {ExternalLink, Linkedin, Mail} from "lucide-react";
import {Separator} from "@/app/components/ui/Separator";
import {Button} from "@/app/components/ui/Button";
import {Card} from "@/app/components/ui/Card";
import {Avatar} from "@/app/components/ui/Avatar";
import daniel from '../../../../../../public/daniel.jpg'
import Image from 'next/image'
import './Footer.scss'

const Footer = () => {
    console.log()
    return (
        <footer className='footer'>
            <h4>Vous pouvez me retrouver également sur :</h4>
            <div className="flex gap-4">
                <Linkedin className="my-auto"/>
                <a href="https://www.linkedin.com/in/verdesben" target="_blank" className="footer__linkLinkedin">LinkedIn<ExternalLink style={{height: '1rem'}}/></a>
            </div>

            <Separator/>
            <h4 className="footer__mailTitle">Par Mail:</h4>
            <div className="footer__mailBox">

                <Mail/>
                <p>verdesb.devacc@gmail.com</p>
            </div>

            <Separator className="my-4"/>
            <div className='footer__cvBox'>
                <h4 className='footer__cvTitle'>Mon Cv:</h4>

                <Button><a href='/CV_BenjaminV.pdf' target='_blank' rel='noopener noreferrer'>Jeter un coup d&apos; oeil</a><ExternalLink style={{height: '1rem',marginLeft: '0.5rem'}}/></Button>
            </div>

            <Separator className="my-4"/>
            <Card className='footer__card'>
            <h4 className="footer__cardTitle">Besoin de visuels? d&apos; un branding ?</h4>
                <div className="footer__cardBox">
                    <Avatar className="footer__avatar"><Image src={daniel} alt="moi"/></Avatar>
                    <div>
                        <a className="flex items-center" href="https://www.linkedin.com/in/daniel-monteiro-b8704b221/">Daniel Monteiro<ExternalLink style={{height: '1rem',marginLeft: '0.5rem'}}/></a>
                        <p>Désigner Graphique - DA - @La cuisine graphique</p>
                    </div>
                </div>



            </Card>
            <Separator/>
            <p className="w-full text-center mt-4">@Bennydev</p>

        </footer>
    )
}
export default Footer;