'use client'
import {Carousel, CarouselContent, CarouselItem} from "@/app/components/ui/Carousel";
import CardCustom from "@/app/CardCustom";

export default function CarouselCustom() {
    return(

        <Carousel className="carousel">
            <CarouselContent className="carousel__content">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem className="carousel__item" key={index}>
                        <CardCustom/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

    )
}