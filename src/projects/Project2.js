import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project2 = () => {
    return (
        <div>
            <Navbar className='NavBarYo' variant="dark">
                <div className='home-icon' href="#home">CZ</div>
                <Nav className="right">
                    <Link className='navbar-other' to="/">Projects</Link>
                    <Link className='navbar-other' to="/">Contact</Link>
                    <Nav.Link href={Pdf}>Resume</Nav.Link>
                </Nav>
            </Navbar>
                <div className='backbar'>
                    <Link to='/'><Button variant='light' className='back-button'> <ArrowLeft /> Back </Button></Link>
                </div>
            <div className='centered'>
                <div className='project2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Mike's Calzones Updated</div>
                        <div className='bottomtext'>Prototyping and Redesigning a Website</div>
                    </div>
                </div>
                <b>I redesigned a local restaurant's website, and I wrote
                    Lo-fi and Hi-fi prototypes for the interface.</b>
                <br></br>

                <div className='centered-title'> Introduction</div>
                This project is about redesigning a user interface that currently exists. I chose the restaurant and wesbite  MikesCalzones.com to redesign.  First, I will discuss the problems with the interface. Then, I will go showing the lo-fi and hi-fi prototypes of the website. Finally, I will redesign the website. <br></br> <br></br>
                <div className='centered-title'> Old Wesbite</div>
                <ul>
                    <li>Color contrast could be improved using the same signature colors</li>
                    <li>Information grouping is confusing and is hard to quickly parse for the user</li>
                    <li>Text on home page is seemingly unscannable</li>
                    <li>Navigating to other parts of the other parts of the site isn't obvious and is subtle</li>
                    <li>Hours aren't centered/aren't in line with the scan</li>
                    <li>Hours are hard to parse for a specific day</li>
                    <li>Content seems randomly placed on the page</li>
                </ul>
                <br></br>
                <br></br>
                <div className='centered-title'> Newly Designed Wesbite</div>
                <div className='just-centered'> <div className='image'></div> </div>
                <div> <ul >
                    <li>Color Contrast is now much more attractive, while still using the same key colors</li>
                    <li>Menu is easily accesible and it is easy to find</li>
                    <li>Text is easy to scan now. The site is very easy to parse quickly</li>
                    <li>Hours are easily found, and the hours are cleanly displayed</li>
                    <li>Operating around the site is very simple, buttons are obviously links</li>
                </ul>

                </div>

                <br></br>
                <div className='just-centered'> Interesting in learning more about the project? Contact me at
                </div>
                <a className='just-centered' href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
            </div>
        </div>
    );
}

export default project2;