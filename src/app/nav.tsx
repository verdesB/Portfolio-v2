import Link from "next/link";

export default function Nav() {
    return (
        <nav className="nav">
            <ul style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2px'
            }}>
                <li className="nav__listItem"><Link href="#Home"></Link></li>
                <li className="nav__listItem"></li>
                <li className="nav__listItem"></li>
                <li className="nav__listItem"></li>
                <li className="nav__listItem"></li>
                <li className="nav__listItem"></li>
            </ul>
        </nav>
    )
}