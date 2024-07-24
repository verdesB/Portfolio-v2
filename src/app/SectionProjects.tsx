import CarouselCustom from "@/app/CarouselCustom";
import {Tabs} from "@/app/components/ui/Tabs";
import { TabsProject} from "@/app/TabsData";
import './Project.scss'

const SectionProjects = () => {

    console.log()
    return (
        <section id="projets" className="project">
            <div className="project__boxTop">
                <h2 className="project__title">PROJETS</h2>
            </div>

            <TabsProject/>

        </section>
    )
}

export default SectionProjects;