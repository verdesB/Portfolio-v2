import CarouselCustom from "@/app/CarouselCustom";
import './Project.scss'



export default function ProjectSection() {
    return (
        <section id="projets" className="project">
            <div className="project__boxTop">
                <h2 className="project__title">Projets</h2>
            </div>
            <div className="project__boxBottom">
            <CarouselCustom/>
            </div>
        </section>
    )
}