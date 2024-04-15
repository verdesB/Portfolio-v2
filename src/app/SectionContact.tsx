import './Contact.scss'
import {CardStackDemo} from "@/app/CardsMotionCustom";
import {BackgroundBeams} from "@/app/components/ui/BackgroundBeams";
import {Card, CardContent, CardDescription, CardHeader} from "@/app/components/ui/Card";
import {Label} from "@/app/components/ui/Label";
import {Input} from "@/app/components/ui/Input";
import {Textarea} from "@/app/components/ui/TextArea";
import './Contact.scss'
import {Separator} from "@/app/components/ui/Separator";

export default function ContactSection() {
    return (
        <section className="contact" >
            <div className="contact__boxTop">
                <h2 className="contact__title">Contact</h2>
                <Card className="contact__card">
                    <CardHeader>
                        Formulaire de Contact
                        <CardDescription >You can send me an email with this form :)</CardDescription>
                    </CardHeader>
                    <CardContent>

                    <Label>Name:</Label>
                    <Input></Input>
                        <Label>Surname:</Label>
                        <Input></Input>
                        <Label>Email:</Label>
                        <Input></Input>
                        <Label>Message:</Label>
                        <Textarea ></Textarea>
                    </CardContent>
                </Card>

            </div>
            <Separator/>
            <div className="contact__boxBottom">

            </div>
            <BackgroundBeams />
        </section>

    )
}