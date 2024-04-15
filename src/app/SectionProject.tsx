import {Separator} from "@/app/components/ui/Separator";
import {Carousel, CarouselContent, CarouselItem} from "@/app/components/ui/Carousel";
import {Card} from "@/app/components/ui/Card";
import CardCustom from "@/app/CardCustom";
import CarouselCustom from "@/app/CarouselCustom";
import './Project.scss'


export default function ProjectSection() {
    return (
        <section className="project">
            <div className="project__boxTop">
                <h2 className="project__title">Projects</h2>
            </div>

            <div className="project__boxBottom">
            <CarouselCustom/>


            </div>
        </section>
    )
}