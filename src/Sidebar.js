import notionImg from "./assets/img/notion.png";
import nenBlogImg from "./assets/img/넨이의 코딩.png";
import gitHubImg from "./assets/img/github.png";

let Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="inner">
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search"/>
                    </form>
                </section>
                <nav id="menu">
                    <header className="major">
                        <h2>Menu</h2>
                    </header>
                    <ul className="none-font">
                        <li><a href="/main">Homepage</a></li>
                        <li><a href="#Ability">SKILL</a></li>
                        <li><a href="#PortFolio">PORTFOLIO</a></li>
                        <li>
                            <span className="opener">Submenu</span>
                            <ul>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>
                        <li><a href="/main/generic">Generic</a></li>
                        <li><a href="/main/element">Elements</a></li>
                    </ul>
                </nav>

                <section>
                    <header className="major">
                        <h2>Other Site</h2>
                    </header>
                    <div className="mini-posts">
                        <article>
                            <a href="https://github.com/kevin0181" target={"_blank"} className="image"><img
                                src={gitHubImg}
                                alt="nen github img"/></a>
                            <h4>GitHub</h4>
                            <p>
                                Many Project
                            </p>
                        </article>
                        <article>
                            <a href="https://www.notion.so/neneee/My-Life-a89c7f78cc7c4b1cb1a0874d1283a15d"
                               target={"_blank"}
                               className="image"><img src={notionImg} alt="nen notion img"/></a>
                            <h4>Notion</h4>
                            <p>
                                My life in Notion
                            </p>
                        </article>
                        <article>
                            <a href="https://code-nen.tistory.com/"
                               target={"_blank"} className="image"><img src={nenBlogImg}
                                                                        alt="nen blog Img"/></a>
                            <h4>Nen Blog</h4>
                            <p>
                                Dev diary and error collection
                            </p>
                        </article>
                    </div>
                    {/*<ul className="actions">*/}
                    {/*    <li><a href="#" className="button">More</a></li>*/}
                    {/*</ul>*/}
                </section>

                <section>
                    <header className="major">
                        <h2>Get in touch</h2>
                    </header>
                    {/*<p>*/}
                    {/*</p>*/}
                    <ul className="contact">
                        <li className="icon solid fa-envelope">
                            <a href="#">kevin018111@gmail.com</a>
                        </li>
                        <li className="icon solid fa-phone">010-8650-9052</li>
                        {/*<li className="icon solid fa-home">*/}
                        {/*    1234 Somewhere Road #8254<br/>*/}
                        {/*    Nashville, TN 00000-0000*/}
                        {/*</li>*/}
                    </ul>
                </section>

                <footer id="footer">
                    {/*<p className="copyright">*/}
                    {/*    &copy; Untitled. All rights reserved. Demo Images:*/}
                    {/*    <a href="https://unsplash.com">Unsplash</a>. Design:*/}
                    {/*    <a href="https://html5up.net">HTML5 UP</a>.*/}
                    {/*</p>*/}
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;