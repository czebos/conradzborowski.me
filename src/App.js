import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import TextTransition, { presets } from "react-text-transition";
import CypherText from 'react-cypher-text-loop'
import { Cpu, ArrowDown } from 'react-bootstrap-icons';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Pdf from './conrad_zborowski_resume.pdf' 
import img from './Conrad2.png'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'
import Project5 from './projects/Project5'
import Project6 from './projects/Project6'

import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

import { SocialIcon } from 'react-social-icons';



const texts = ["I'm Conrad Zborowski.", "I'm a Developer."]


function App() {

    return (
        <BrowserRouter>
            <Switch>
            <Route path="/project2">
                <Project2 />
            </Route>
            <Route path="/project3">
                <Project3 />
            </Route>
            <Route path="/project4">
                <Project4 />
            </Route>
            <Route path="/project5">
                <Project5 />
            </Route>
            <Route path="/project6">
                <Project6 />
            </Route>
            <Route path="/project1">
                <Project1 />
            </Route>
            <Route path="/">
                    <div className="App">

                        <header className="App-header">
                        </header>

                        <body>
                            <Navbar className='NavBarYo' variant="dark">
                                <div className='home-icon' href="#home">CZ</div>
                                <Nav className="right">
                                    <SmoothLink className='navbar-other' smooth={true} activeClass="active" to="projects">Projects</SmoothLink>
                                    <SmoothLink className='navbar-other' smooth={true} activeClass="active" to="pictures">Pictures</SmoothLink>
                                    <SmoothLink className='navbar-other' smooth={true} activeClass="active" to="contact">Contact</SmoothLink>
                                    <Nav.Link href={Pdf}>Resume</Nav.Link>
                                </Nav>
                            </Navbar>
                            <CypherText className='movingtext' placeholders="_" delay={2000} textList={texts} />
                            <Cpu className='cpu' />
                            <p className="para">I'm a Software Engineer based in Chicago.</p>
                            <p className="smaller-para">Internships and Projects</p>
                            <SmoothLink className='navbar-other' smooth={true} activeClass="active" to="projects"><ArrowDown size='40px'/></SmoothLink>
                            <div id="projects" className="collection">
                                <Link to='/project1' className='project cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>Google Ads Internship</div>
                                        <div className='bottomtext'>Caching intermediate steps of integration testing</div>
                                    </div>
                                </Link>

                                <Link to='/project5' className='project5 cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>Google Cloud Internship</div>
                                        <div className='bottomtext'>Pipeling testing data to produce coverage reports</div>
                                    </div>
                                </Link>

                                <Link to='/project4' className='project4 cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>Kalman Filter</div>
                                        <div className='bottomtext'>Predicting Monkeys Hand Movement via Deep Learning</div>
                                    </div>
                                </Link>

                                <Link to='/project3' className='project3 cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>PiButtlerfly Implementation </div>
                                        <div className='bottomtext'>Researching/Implementing a security algorithm</div>
                                    </div>
                                </Link>

                                <Link to='/project2' className='project2 cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>CrossPlay</div>
                                        <div className='bottomtext'>Chess-based game + Monte Carlo AI</div>
                                    </div>
                                </Link>
                            
                                <Link to='/project6' className='project6 cancel'>
                                    <div className='textContainer'>
                                        <div className='toptext'>multipl.io</div>
                                        <div className='bottomtext'>Multiplater online web game</div>
                                    </div>
                                </Link>
                            
                            </div>
                            <div className='pictures'>
                            <div className="title-contact"> Pictures</div>
                            <SmoothLink className='navbar-other' smooth={true} activeClass="active" to="pictures"><ArrowDown size='40px'/></SmoothLink>
                            <div id="pictures" className="collection2">
                                <div to='/project4' className='img1 cancel'>
                                </div>
                                <div to='/project4' className='img2 cancel'>
                                </div>
                                <div to='/project4' className='img3 cancel'>
                                </div>
                                <div to='/project4' className='img4 cancel'>
                                </div>
                                <div to='/project4' className='img5 cancel'>
                                </div>
                                <div to='/project4' className='img6 cancel'>
                                </div>
                            </div>
                            </div>

                            <div id='contact'>
                                <div className="title-contact"> Lets get in Contact!</div>
                                <div className="social-media">
                                    <SocialIcon className='icon-so' url="https://facebook.com/conrad.zborowski" />
                                    <SocialIcon className='icon-so' url="https://linkedin.com/in/conrad-zborowski/" />
                                    <SocialIcon className='icon-so' url="https://github.com/czebos" />
                                    <SocialIcon className='icon-so' url="https://instagram.com/conradzftw/i" />

                                </div>
                                <div className="contact-container">
                                    <div className='wrapper1'> <img className='me-img' src={img} /> </div>
                                    <div className='wrapper2'>
                                        <b className='contact-title'>Intersted in Learning More?</b>
                                        <div className='contact-para'>Feel free to shoot me an email at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>.
                                I would love to talk to you about my portfolio, my CS goals, possible inquiries or even my favorite activies like
                                  lifting and gaming.
                              </div>
                                    </div>
                                </div>
                                <div style={{fontSize:'12px'}}>© COPYRIGHT CONRAD ZBOROWSKI 2021. ALL RIGHTS RESERVED.</div>
                            </div>

                        </body>


                    </div>
            </Route>
        </Switch>
          
    </BrowserRouter>
  );
}

export default App;
