import './Contact.scss'
import {Card} from "@/app/components/ui/Card";
import {Mail} from "lucide-react";
import ContactForm from "@/app/ContactForm";
import {Separator} from "@/app/components/ui/Separator";
import Footer from "@/app/components/V2/Contact/Footer/Footer";
const Contact = () => {
    console.log()
    return (
        <section id="contact" className="contact">
            <Card className='contact__card'>
                <div className="contact__boxTop">
                    <Mail  className='contact__icon'/>
                    <h6 className="contact__title">Formulaire de contact</h6>
                </div>

                <div className="contact__boxBottom">
                    <ContactForm />

                </div>





            </Card>

            <Footer/>

        </section>

    )
}
export default Contact