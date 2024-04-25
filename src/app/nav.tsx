import Link from "next/link";
import {
    BaggageClaim, Contact,
    FolderGit2,
    Home,
    Layers3,
    MessageCircle,
    MessageSquareHeart,
    User,
    UserRoundSearch
} from "lucide-react";
import {FloatingNav} from "@/app/components/ui/FloatingNavBar";

export default function Nav() {
    const navItems = [
        {
            name: "Accueil",
            link: "#accueil",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "A propos",
            link: "#a-propos",
            icon: <UserRoundSearch className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projets",
            link: "#projets",
            icon: (
                <FolderGit2  className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <Layers3 className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "FeedBacks",
            link: "#feedbacks",
            icon: (
                <MessageSquareHeart className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },

        {
            name: "Contact",
            link: "#contact",
            icon: (
                <Contact className="h-4 w-4 text-neutral-500 dark:text-white" />
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