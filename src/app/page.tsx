import Image from "next/image";
import {Apple} from "lucide-react";
import './header.scss'
import Link from "next/link";
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

export default function Home() {
  return (
      <div className="main-container">
          <Nav/>
          <Header/>
          <main  className="flex  flex-col items-center justify-between main">
              <HomeSection/>
              <Separator style={{width: '80%'}}/>
              <AboutSection/>
              <Separator style={{width: '80%'}}/>
              <ProjectSection/>
              <Separator style={{width: '80%'}}/>
              <SkillsSection/>
              <Separator style={{width: '80%'}}/>
              <FeedBackSection/>
              <Separator style={{width: '80%'}}/>
              <ContactSection/>

        </main>
      </div>
  );
}
