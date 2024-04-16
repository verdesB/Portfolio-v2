'use client'
import {Carousel, CarouselContent, CarouselItem} from "@/app/components/ui/Carousel";
import CardCustom from "@/app/CardCustom";

export default function CarouselCustom() {
    return(

        <Carousel style={{height: '35rem'}}>
            <CarouselContent style={{height: '35rem'}}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} style={{height: '35rem'}}>
                        <CardCustom/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

    )
}