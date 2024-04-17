import Link from "next/link";
import {BaggageClaim, Home, MessageCircle, User} from "lucide-react";
import {FloatingNav} from "@/app/components/ui/FloatingNavBar";

export default function Nav() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: (
                <BaggageClaim className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "FeedBacks",
            link: "#feedbacks",
            icon: (
                <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },

        {
            name: "Contact",
            link: "#contact",
            icon: (
                <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <FloatingNav navItems={navItems} />
        // <nav className="nav">
        //     <ul style={{
        //         height: '100%',
        //         width: '100%',
        //         display: 'flex',
        //         flexDirection: 'column',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //         padding: '2px'
        //     }}>
        //         <li className="nav__listItem"><Link href="#Home"></Link></li>
        //         <li className="nav__listItem"></li>
        //         <li className="nav__listItem"></li>
        //         <li className="nav__listItem"></li>
        //         <li className="nav__listItem"></li>
        //         <li className="nav__listItem"></li>
        //     </ul>
        // </nav>
    )
}