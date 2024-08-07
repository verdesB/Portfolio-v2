
import './header.scss'
import Nav from "@/app/nav";
import Header from "@/app/header";
import HomeSection from "@/app/SectionHome";
import AboutSection from "@/app/SectionAbout";
import {Separator} from "@/app/components/ui/Separator";
import ProjectSection from "@/app/SectionProject";
import FeedBackSection from "@/app/SectionFeedBack";
import SkillsSection from "@/app/SectionSkills";
import ContactSection from "@/app/SectionContact";
import './main.scss'

import HeaderSection from "@/app/SectionHeader";
import {Toaster} from "@/app/components/ui/Toaster";
import Footer from "@/app/Footer";
import SectionProjects from "@/app/SectionProjects";
import SceneFallingObjects from "@/app/components/3D/Scenes/SceneFallingObjects";



export default function Home() {

  return (

      <div className="main-container">
          <HeaderSection/>

          <main  className="flex  flex-col items-center justify-between main">
              <HomeSection/>
              <Separator style={{width: '80%'}}/>
              <AboutSection/>
              <Separator style={{width: '80%'}}/>
              <SectionProjects/>
              <Separator style={{width: '80%'}}/>
              <SkillsSection/>
              <Separator style={{width: '80%'}}/>
              <FeedBackSection/>
              <Separator style={{width: '80%'}}/>
              <ContactSection/>

        </main>

          <Toaster/>
      </div>

  );
}
