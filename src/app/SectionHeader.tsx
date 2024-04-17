"use client"
import Nav from "@/app/nav";
import Header from "@/app/header";
import {VisibilityContext} from "@/app/context";
import {useState} from "react";

export default function HeaderSection(){
    const [visible, setVisible] = useState(false);
    return(
        <VisibilityContext.Provider value={{visible,setVisible}}>
            <Nav/>

            <Header/>
        </VisibilityContext.Provider>
    )
}