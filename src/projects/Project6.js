import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Arrow90degLeft, Arrow } from 'react-bootstrap-icons';

const project5 = () => {
    return (
        <div>
            <Navbar className='NavBarYo shifted' variant="dark">
                <div className='home-icon' href="#home">CZ</div>
                <div className='filler'> </div>
                <Nav className="right">
                    <Link className='navbar-other float' to="/">Back to Home</Link>
                    <Nav.Link className='' href={Pdf}>Resume</Nav.Link>
                </Nav>
            </Navbar>
                <div style={{marginTop:'2vh'}}className='backbar'>
                    <Link style={{marginLeft:'10vw'}} to='/'> <Arrow90degLeft size='36px'/> </Link>
                </div>
            <div className='centered'>
                <div className='project6-2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext2'>multipl.io</div>
                        <div className='bottomtext2'>Multiplater online web game</div>
                    </div>
                </div>
                <div className='divide'>
                    <b className='value'> Strategies:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Server, React/JS, HTML/CSS</div>
                    </b>
                    <b className='value'> Timeline:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> May-Jun 2020</div>
                    </b>
                    <b className='value'> GitHub:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> <a href='https://github.com/czebos/multipl.io'>multipl.io </a></div>
                    </b>
                    <b className='value'> Languages:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Python, Java, Bazel, Cron</div>
                    </b>
                </div>
                <br></br>
                <div className='app-info'>
                <div className='centered-title'> Project Description</div>
                 Curious about server/game interaction and front-end, I created a web app that
                 is backed by a server. I learned how to use React, HTML/CSS, and how to make
                 a server.
                 <br></br> <br></br>
                 I created a game with the goal to multiply your dots. I created AI, so you could
                 play with yourself. Users may create rooms and play with other players online.
                 The game is not currently up, but one could download and run to play with friends.
                 <br></br> <br></br>
                <br></br>
                <br></br>
                <div className='just-centered'> Interesting in learning more about the project? Contact me at
                </div>
                </div>
                <a className='just-centered' href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
            </div>
        </div>
    );
}

export default project5;