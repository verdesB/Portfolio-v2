import {ExternalLink, Linkedin, Mail} from "lucide-react";
import {Separator} from "@/app/components/ui/Separator";
import {Button} from "@/app/components/ui/Button";
import {Card} from "@/app/components/ui/Card";
import {Avatar} from "@/app/components/ui/Avatar";
import moi from '../../../../../../public/moi.jpg'
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
                <Button>Télécharger</Button>
            </div>

            <Separator className="my-4"/>
            <Card className='footer__card'>
            <h4 className="footer__cardTitle">Besoin de visuels? d'un branding ?</h4>
                <div className="footer__cardBox">
                    <Avatar className="footer__avatar"><Image src={moi} alt="moi"/></Avatar>
                    <div>
                        <p>Daniel Monteiro</p>
                        <p>Désigner Graphique - DA - @La cuisine graphique</p>
                    </div>
                </div>



            </Card>

        </footer>
    )
}
export default Footer;