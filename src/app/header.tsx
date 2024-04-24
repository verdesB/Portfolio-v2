"use client"
import {Apple, X} from "lucide-react";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import {Button} from "@/app/components/ui/Button";
import {VisibilityContext} from "@/app/context";
import {useContext} from "react";
import logo from '../../public/logo.svg'
import Image from "next/image";
export default function Header() {
    const { setVisible , visible } = useContext(VisibilityContext);
    console.log(visible)
    return (
        <header className="header">
            <div className="header__logoContainer">
                <p>PORTFOLIO</p>
            </div>
            <div className="header__rightContainer">
                <VisibilityContext.Provider value={{visible, setVisible}}>
                <Button onClick={() => setVisible(prevVisible => !prevVisible)}  variant="outline" style={{height: '1.5rem' ,width: "auto",backgroundColor: '#ffffff', padding: '0.3rem', zIndex:  1}}>
                    {visible? <X style={{color: '#454545', height: '100%'}}/>:<HamburgerMenuIcon style={{color: '#454545'}}/>}
                </Button>
            </VisibilityContext.Provider>

            </div>
        </header>
    )
}