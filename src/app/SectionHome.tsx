import { Avatar } from "@/app/components/ui/Avatar";
import Image  from 'next/image';
import moi from '../../public/moi.jpg'
import './Home.scss'




import {BackgroundBeams} from "@/app/components/ui/BackgroundBeams";


export default function HomeSection() {

    return(
        <section id="home" className="home">
            <div className="home__boxTop">
                <Avatar className="home__image">
                    <Image src={moi} alt="Photo de Benjamin Verdès"/>
                </Avatar>
            </div>
            <div className="home__boxBottom">
                <p className="home__text">Hello, I&apos;m</p>
                <h1 className="home__title">VERDES Benjamin,</h1>
                <h2 className="home__subTitle">WEB</h2>
                <h2 className="home__subTitle">DEVELOPER</h2><span className="home__span">.ts</span>
            </div>
            <BackgroundBeams/>
        </section>
    )
}