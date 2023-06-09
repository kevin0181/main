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
import sosoPng from "./assets/img/soso.png";
import Sidebar from "./Sidebar";
import Header from "./Header";
import KioskImg from "./assets/img/키오스크.jpeg";
import KioskMainImg from "./assets/img/kioskMain.png";

let Main = () => {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header/>
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
                                ><img src={sosoPng} alt="soso img"
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
                                            href={"#!"}
                                            className="button"
                                        >More</a
                                        >
                                    </li>
                                </ul>
                            </article>
                            <article>
                                <a href="#!" className="image"
                                ><img src={KioskMainImg} alt="kiosk main img"
                                /></a>
                                <h3 className="none-font">
                                    <a href="https://soso-kitchen.com" target="_blank"
                                    >KIOSK</a
                                    >
                                </h3>
                                <p>
                                    Spring Boot 및 React를 사용한 키오스크 입니다. Electron.js를 사용하여 윈도우 환경에서 키오스크가 작동하며 소소한 부엌 사이트와
                                    연동하여 실시간으로 주문이 들어오며 환불 및 메뉴 관리가 가능합니다.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a
                                            href={"#!"}
                                            className="button"
                                        >More</a
                                        >
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </div>
            </div>

            <Sidebar/>
        </div>
    );
}
export default Main;