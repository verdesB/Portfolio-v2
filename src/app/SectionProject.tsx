import CarouselCustom from "@/app/CarouselCustom";
import './Project.scss'



export default function ProjectSection() {
    return (
        <section id="projects" className="project">
            <div className="project__boxTop">
                <h2 className="project__title">Projects</h2>
            </div>
            <div className="project__boxBottom">
            <CarouselCustom/>
            </div>
        </section>
    )
}