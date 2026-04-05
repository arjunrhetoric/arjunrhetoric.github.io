import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutArjun extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Arjun" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Arjun' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Arjun' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Arjun' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Arjun's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutArjun;

export const displayAboutArjun = () => {
    return <AboutArjun />;
}


function About() {
    return (
        <>
            <div className="w-34 md:w-42 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/logo.jpeg" alt="Arjun Singh Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Arjun Singh</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Computer Engineering Student</span> — surviving (not thriving 😅), somewhere between <strong>'works on my machine'</strong> and <strong>'works in prod'</strong>. Currently building MERN stack projects & exploring modern tech. Hit me up at <a className='text-underline' href='mailto:singharjun211106@gmail.com'><u>singharjun211106@gmail.com</u></a> 🚀</li>
                <li className=" mt-3 list-building"> I build full-stack solutions that solve real problems — when the code cooperates. My debug strategy: <code>console.log('here')</code>, <code>console.log('here2')</code>, <code>console.log('WHY?!')</code> 🎯</li>
                <li className=" mt-3 list-time"> When I'm not coding, I'm reading about tech I'll forget by tomorrow, contributing questionable code to open source, or pretending I understand what I wrote last week 😂</li>
                <li className=" mt-3 list-star"> Currently building <a href="https://github.com/arjunrhetoric/innoverse" target="_blank" rel="noreferrer"><u>Innoverse</u></a> - an innovation community platform where builders connect, share ideas, and actually ship things!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Thakur College of Engineering & Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Pursuing</div>
                    <div className=" text-sm md:text-base">Computer Engineering </div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Mumbai, India 🌧️</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Skills & Specializations
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Focus Areas</div>
                    <div className=" text-sm md:text-base">Full Stack Development • MERN Stack • Docker • Cloud Deployment</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Building Production-Ready Applications</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Current Work
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2025 - Present</div>
                    <div className=" text-sm md:text-base">Building <a href="https://github.com/arjunrhetoric/innoverse" target="_blank" rel="noreferrer"><u>Innoverse</u></a> • Tech @ Spanwiz</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Collaborative Community Platform</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks with a strong focus on full-stack development.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">MERN Stack, Node.js & modern JavaScript/TypeScript, Docker & Cloud Deployment!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Production-ready skills in building scalable, maintainable applications</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Arjun javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="Arjun typescript" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Arjun java" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="Arjun HTML" /></a>

                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Arjun git" className="m-1" />
                        
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="Arjun next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="Arjun react" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Arjun tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="Arjun node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/MongoDB-13AA52?style=flat&logo=mongodb&logoColor=white" alt="Arjun mongodb" />
                        <img className="m-1" src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Arjun express" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> DevOps & Cloud: </span> <img className=" inline ml-1" src="https://img.shields.io/badge/AWS-FF9900?style=flat&logo=amazon-aws&logoColor=white" alt="Arjun aws" /> <img className=" inline ml-1" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=000" alt="Arjun linux" /><img className="m-1" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Arjun docker" />
    
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "FormFlow",
            date: "Apr 2025",
            link: "https://github.com/arjunrhetoric/formflow",
            description: [
                "The Architect's Canvas — A world-class no-code form builder with JWT auth, real-time collaboration, conditional field logic, Cloudinary uploads, CSV/JSON exports & form history snapshots. Built during a hackathon.",
            ],
            domains: ["typescript", "next.js", "tailwindcss", "socket.io"]
        },
        {
            name: "Innoverse",
            date: "April 2025",
            link: "https://github.com/arjunrhetoric/innoverse",
            description: [
                "Innovation Community Platform — A full-stack ecosystem where builders, developers, and entrepreneurs connect, share ideas, and collaborate on projects. Currently building & maintaining.",
            ],
            domains: ["javascript", "node.js", "mongodb", "react"]
        },
        {
            name: "InfraChat",
            date: "March 2026",
            link: "https://github.com/arjunrhetoric/InfraChat",
            description: [
                "An enterprise-grade authentication system built with Java Servlets for secure login, authentication & logout. A classic backend implementation showcasing servlet mastery.",
            ],
            domains: ["java", "servlets", "backend"]
        },
        {
            name: "Nexus Bank Support",
            date: "2025",
            link: "https://github.com/arjunrhetoric/nexus-bank-support",
            description: [
                "Full-stack banking support portal with React + Node/Express. Features Dockerized architecture with Nginx reverse proxy, Docker Compose orchestration, and complete AWS EC2 deployment guide.",
            ],
            domains: ["javascript", "react", "node.js", "docker", "aws"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600",
        "typescript": "blue-600",
        "socket.io": "blue-400",
        "node.js": "green-400",
        "mongodb": "green-600",
        "react": "blue-400",
        "java": "orange-600",
        "servlets": "orange-500",
        "backend": "purple-400",
        "docker": "blue-500",
        "aws": "orange-400"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=arjunrhetoric&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Arjun Singh Resume.pdf" title="arjun singh resume" frameBorder="0"></iframe>
    )
}