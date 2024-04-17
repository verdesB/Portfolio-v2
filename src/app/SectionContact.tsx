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

export default function ContactSection() {
    return (
        <section id="contact" className="contact" >
            <div className="contact__boxTop">
                <h2 className="contact__title">Contact</h2>
                <Card className="contact__card">
                    <CardHeader className="contact__cardHeader">
                        Formulaire de Contact
                        <CardDescription className="contact__cardDescription" >You can send me an email with this form :)</CardDescription>
                    </CardHeader>
                    <CardContent>

                    <Label className="contact__label">Name:</Label>
                    <Input></Input>
                        <Label className="contact__label">Surname:</Label>
                        <Input></Input>
                        <Label className="contact__label">Email:</Label>
                        <Input></Input>
                        <Label className="contact__label">Message:</Label>
                        <Textarea ></Textarea>
                    </CardContent>
                </Card>

            </div>
            <Separator  className="separatorHorizontal"/>
            <Separator  className="separatorVertical"/>
            <div className="contact__boxBottom">
                <div className="contact__boxIcon">
                    <Github className="contact__icon"/>
                </div>
                <div className="contact__boxIcon">
                    <Linkedin className="contact__icon"/>
                </div>

            </div>
            <BackgroundBeams />
        </section>

    )
}