import { Avatar } from "@/app/components/ui/Avatar";
import Image  from 'next/image';
import moi from '../../public/moi.jpg'
import './Home.scss'




import {BackgroundBeams} from "@/app/components/ui/BackgroundBeams";


export default function HomeSection() {

    return(
        <section id="accueil" className="home">
            <div className="home__boxTop">
                <Avatar className="home__image">
                    <Image src={moi} alt="Photo de Benjamin Verdès"/>
                </Avatar>
            </div>
            <div className="home__boxBottom">
                {/*<p className="home__text">Salut,</p>*/}
                <h1 className="home__title">VERDES Benjamin,</h1>
                <h2 className="home__subTitle">WEB</h2>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h2 className="home__subTitle">DEVELOPER</h2><span className="home__span">.ts</span>
                </div>
            </div>

        </section>
    )
}