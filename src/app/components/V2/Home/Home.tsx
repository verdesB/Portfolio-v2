import {Button} from "@/app/components/ui/Button";
import {Avatar} from "@/app/components/ui/Avatar";
import Image from "next/image";
import './Home.scss'
import moi from  '../../../../../public/moi.jpg'

const HomeSection = () => {
    console.log()
    return (
        <section className="home">
            <div className="home__container">
                <div className="home__boxAvatar">
                    <Avatar className="home__avatar"><Image src={moi} alt="moi"/></Avatar>
                </div>
                <div className="home__boxContent">
                    <h1 className="home__title">
                        Concepteur de solutions et d'expériences numériques
                    </h1>
                </div>
                <Button className="home__action"><a href="#projects">Dernier projets</a></Button>
            </div>
        </section>
    )
}
export default HomeSection;