let Header = () => {
    return (
        <header id="header">
            <a href="/main" className="logo"
            ><h2 style={{
                margin: "0",
                display: "inline-block",
            }} className="none-font">넨이의 코딩</h2>
                <span>by Developer</span></a
            >
            <ul className="icons">
                <li>
                    <a href="#" className="icon brands fa-facebook-f"
                    ><span className="label">Facebook</span></a
                    >
                </li>
                <li>
                    <a href="#" className="icon brands fa-instagram"
                    ><span className="label">Instagram</span></a
                    >
                </li>
            </ul>
        </header>
    )
}

export default Header;