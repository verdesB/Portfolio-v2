

import Nav from "@/app/nav";


import './main.scss'


import {Toaster} from "@/app/components/ui/Toaster";

import Header from "@/app/components/V2/Header/Header";
import HomeSection from "@/app/components/V2/Home/Home";
import Stack from "@/app/components/V2/Stack/Stack";
import MainContent from "@/app/components/V2/MainContent/MainContent";
import FeedBacks from "@/app/components/V2/FeedBacks/FeedBacks";
import Contact from "@/app/components/V2/Contact/Contact";



export default function Home() {

  return (

      <div className="main-container">
        <Header/>

          <main  className="flex  flex-col items-center justify-between main">
              <HomeSection/>
              <Stack/>
              <MainContent/>
              <div style={{position: 'relative'}}>
                  <FeedBacks/>
                  <Contact/>
              </div>

          </main>
          <Toaster/>
      </div>

  );
}
