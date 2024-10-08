import {Linkedin, Menu} from "lucide-react";
import './Header.scss'
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/app/components/ui/DropdownMenu";
import NavMobile from "@/app/components/V2/Header/NavMobile/NavMobile";


const Header = () => {
    console.log()
    return (
        <header className="header">
            <div className="header__boxLeft">
                <h2 className="header__title">BennyDev</h2>
            </div>
            <nav className="header__boxRight">
                <ul className="header__linksList">
                    <li className="header__link"><a href="#about">A propos</a></li>
                    <li className="header__link"><a href="#services">Services</a></li>
                    <li className="header__link"><a href="#projects">Projects</a></li>
                    <li className="header__link"><a href="#feedback">Feedbacks</a></li>
                    <li className="header__link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <NavMobile/>
        </header>
    )
}
export default Header;