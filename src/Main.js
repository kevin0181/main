import dogImg from "./assets/img/dog.jpg";
import Html5Svg from "./assets/img/html5.svg";
import Css3Svg from "./assets/img/css3.svg";
import ReactPng from "./assets/img/react.png";
import JquerySvg from "./assets/img/jquery.svg";
import NodeSvg from "./assets/img/node.svg";
import SpringBootPng from "./assets/img/springBoot.png";
import MysqlSvg from "./assets/img/mysql.svg";
import GithubSvg from "./assets/img/github.svg";
import UbuntuSvg from "./assets/img/ubuntu.svg";
import NaverCloudPng from "./assets/img/naverCloud.png";

let Main = () => {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header">
                        <a href="index.html" className="logo"
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

                    <section id="banner" style={{
                        padding: "18% 0px"
                    }}>
                        <div className="content">
                            <header>
                                <h2 className="none-font">
                                    안녕하세요.<br/>
                                    개발자 유영빈입니다.
                                </h2>
                                <p>hello, coding by nen</p>
                            </header>
                            <p>
                                고등학교부터 IT 관련 학과를 진학하여 현재까지 웹 개발을 이어가고
                                있습니다. 여러가지 웹 페이지를 만들며 능력을 키워나가는 중에
                                있습니다. 조금은 부족할 수 있지만, 최고의 성과물을 내기위해
                                노력하겠습니다. 감사합니다.
                            </p>
                            <ul className="actions">
                                <li><a href="#PortFolio" className="button big">PortFolio</a></li>
                            </ul>
                        </div>
                        <span className="image object">
                            <img src={dogImg} alt="main img" style={{
                                height: "50%"
                            }}/>
                        </span>
                    </section>

                    <section id="Ability">
                        <header className="major">
                            <h2>Skill</h2>
                        </header>
                        <div className="center-header">
                            <div className="skill-mini-header-top-div">
                                <h2 className="center-header skill-mini-header">Front End</h2>
                            </div>
                        </div>
                        <div className="flex-container">
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            HTML
                                        </p>
                                    </div>
                                    <img src={Html5Svg} className="skill-img innerImg" id="frontSkillImg"/>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            CSS
                                        </p>
                                    </div>
                                    <img src={Css3Svg} className="skill-img innerImg"/>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            REACT
                                        </p>
                                    </div>
                                    <img src={ReactPng} className="skill-img innerImg"/>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            JQUERY
                                        </p>
                                    </div>
                                    <img src={JquerySvg} className="skill-img innerImg"/>
                                </div>
                            </article>
                        </div>

                        <div className="center-header">
                            <div className="skill-mini-header-top-div">
                                <h2 className="center-header skill-mini-header">Back End</h2>
                            </div>
                        </div>
                        <div className="flex-container">
                            <article className="block">
                                <div>
                                    <div id="skill-img">
                                        <div className="skill-img hide-content back-position" id="backSkillImg">
                                            <p className="skill-font">
                                                Node
                                            </p>
                                        </div>
                                        <img src={NodeSvg} className="skill-img innerImg"/>
                                    </div>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            SPRING BOOT
                                        </p>
                                    </div>
                                    <img src={SpringBootPng} className="skill-img"/>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            MYSQL
                                        </p>
                                    </div>
                                    <img src={MysqlSvg} className="skill-img innerImg"/>
                                </div>
                            </article>
                        </div>
                        <div className="center-header">
                            <div className="skill-mini-header-top-div">
                                <h2 className="center-header skill-mini-header">DevOps</h2>
                            </div>
                        </div>
                        <div className="flex-container">
                            <article className="block">
                                <div>
                                    <div id="skill-img">
                                        <div className="skill-img hide-content back-position" id="backSkillImg">
                                            <p className="skill-font">
                                                GITHUB
                                            </p>
                                        </div>
                                        <img src={GithubSvg} className="skill-img innerImg"/>
                                    </div>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            UBUNTU
                                        </p>
                                    </div>
                                    <img src={UbuntuSvg} className="skill-img innerImg"/>
                                </div>
                            </article>
                            <article className="block">
                                <div id="skill-img">
                                    <div className="skill-img hide-content back-position" id="backSkillImg">
                                        <p className="skill-font">
                                            NAVER CLOUD
                                        </p>
                                    </div>
                                    <img src={NaverCloudPng} className="skill-img innerImg"/>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section id="PortFolio">
                        <header className="major">
                            <h2>Project</h2>
                        </header>
                        <div className="posts">
                            <article>
                                <a href="https://soso-kitchen.com" target="_blank" className="image"
                                ><img src="img/soso.png" alt=""
                                /></a>
                                <h3 className="none-font">
                                    <a href="https://soso-kitchen.com" target="_blank"
                                    >소소한 부엌</a
                                    >
                                </h3>
                                <p>
                                    Spring Boot 기반으로 이루어진 실시간 주문 및 현황 조회,
                                    예약주문, 소셜 로그인, 블로그, 댓글, 주문 조회가 가능한 웹
                                    페이지입니다.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a
                                            href="https://www.notion.so/neneee/b74d009791d44ab78c254d9617d8d0cf"
                                            className="button"
                                            target="_blank"
                                        >More</a
                                        >
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </div>
            </div>

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
                            <li><a href="index.html">Homepage</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li>
                                <span className="opener">Submenu</span>
                                <ul>
                                    <li><a href="#">Lorem Dolor</a></li>
                                    <li><a href="#">Ipsum Adipiscing</a></li>
                                    <li><a href="#">Tempus Magna</a></li>
                                    <li><a href="#">Feugiat Veroeros</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Etiam Dolore</a></li>
                            <li><a href="#">Adipiscing</a></li>
                            <li>
                                <span className="opener">Another Submenu</span>
                                <ul>
                                    <li><a href="#">Lorem Dolor</a></li>
                                    <li><a href="#">Ipsum Adipiscing</a></li>
                                    <li><a href="#">Tempus Magna</a></li>
                                    <li><a href="#">Feugiat Veroeros</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Maximus Erat</a></li>
                            <li><a href="#">Sapien Mauris</a></li>
                            <li><a href="#">Amet Lacinia</a></li>
                        </ul>
                    </nav>

                    <section>
                        <header className="major">
                            <h2>Ante interdum</h2>
                        </header>
                        <div className="mini-posts">
                            <article>
                                <a href="#" className="image"><img src="images/pic07.jpg" alt=""/></a>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                                    dolore aliquam.
                                </p>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="images/pic08.jpg" alt=""/></a>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                                    dolore aliquam.
                                </p>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="images/pic09.jpg" alt=""/></a>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                                    dolore aliquam.
                                </p>
                            </article>
                        </div>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </section>
                    <section>
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <p>
                            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
                            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                        </p>
                        <ul className="contact">
                            <li className="icon solid fa-envelope">
                                <a href="#">information@untitled.tld</a>
                            </li>
                            <li className="icon solid fa-phone">(000) 000-0000</li>
                            <li className="icon solid fa-home">
                                1234 Somewhere Road #8254<br/>
                                Nashville, TN 00000-0000
                            </li>
                        </ul>
                    </section>

                    <footer id="footer">
                        <p className="copyright">
                            &copy; Untitled. All rights reserved. Demo Images:
                            <a href="https://unsplash.com">Unsplash</a>. Design:
                            <a href="https://html5up.net">HTML5 UP</a>.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
export default Main;