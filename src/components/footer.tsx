type footerProps = {
    text: string,
    logo: string
} 

export function Footer (props: footerProps) {
    return(
        <footer>
            <div className="bg">
                <div className="flex">
                    <p>{props.text}</p>
                    <button></button>
                </div>
                <nav className="flex">
                    <img src={props.logo} alt="" />
                    <ul>
                        <li>ABOUT</li>
                        <li>HOW TO</li>
                        <li>FAQS</li>
                    </ul>
                </nav>
            </div>
            <div className="flex">
                <p>Copyright @ 2019</p>
                <div className="icons flex">
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </div>
            </div>
        </footer>
    );
}