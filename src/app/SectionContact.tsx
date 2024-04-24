import './Contact.scss'
import {CardStackDemo} from "@/app/CardsMotionCustom";
import {BackgroundBeams} from "@/app/components/ui/BackgroundBeams";
import {Card, CardContent, CardDescription, CardHeader} from "@/app/components/ui/Card";
import {Label} from "@/app/components/ui/Label";
import {Input} from "@/app/components/ui/Input";
import {Textarea} from "@/app/components/ui/TextArea";
import './Contact.scss'
import {Separator} from "@/app/components/ui/Separator";
import {Github, Linkedin} from "lucide-react";
import Link from "next/link";
import {Button} from "@/app/components/ui/Button";
import ContactForm from "@/app/ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="contact" >
            <div className="contact__boxTop">
                <h2 className="contact__title">Contact</h2>
                <Card className="contact__card">
                    <CardHeader className="contact__cardHeader">
                        Formulaire de Contact
                        <CardDescription className="contact__cardDescription" >Vous pouvez me contacter directement avec ce formulaire , et je vous répondrais au plus vite </CardDescription>
                    </CardHeader>
                    <CardContent>
                       <ContactForm/>

                    </CardContent>

                </Card>

            </div>
            <Separator  className="separatorHorizontal"/>
            <Separator  className="separatorVertical"/>
            <div className="contact__boxBottom">
                <div className="contact__boxIcon">
                    <Link href="https://github.com/verdesB" target="_blank"><Github className="contact__icon"/></Link>
                </div>
                <div className="contact__boxIcon">
                    <Link href="https://www.linkedin.com/in/verdesben" target="_blank"><Linkedin className="contact__icon"/></Link>
                </div>
            </div>

        </section>

    )
}