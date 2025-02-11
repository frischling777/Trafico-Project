type HeaderProps = {
    logo: string,
    h1: string,
    buttonText: string
}

export function Header(props: HeaderProps) {
    return(
        <header>
            <nav>
                <img src={props.logo} />
                <ul>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">HOW TO</a></li>
                    <li><a href="">FAQS</a></li>
                    <li><a href="" className="btn">CONTACT US</a></li>
                </ul>
            </nav>
            <h1>{props.h1}</h1>
            <a href="" className="btn">{props.buttonText}</a>
        </header>
    )
}