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
                <div className='project2-2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext2'>CrossPlay </div>
                        <div className='bottomtext2'>Chess-based game + Monte Carlo AI</div>
                    </div>
                </div>
                <div className='divide'>
                    <b className='value'> Strategies:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> General Coding, AI</div>
                    </b>
                    <b className='value'> Timeline:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Nov-Dec 2017</div>
                    </b>
                    <b className='value'> GitHub:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> <a href='https://github.com/czebos/CrossPlay'>CrossPlay</a></div>
                    </b>
                    <b className='value'> Languages:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Java, JavaFx</div>
                    </b>
                </div>
                <br></br>
                <div className='app-info'>
                <div className='centered-title'> Project Description</div>
                 In my free time, I implemented a game I designed and created. This was
                 when I first started coding, so I learned a lot about style and actual coding.
                 <br></br> <br></br>
                 I created a front end handling moves and games, a backend handling logic, and an AI
                 that can compete in the game. The AI used the Monte Carlo Tree Search Algorithm. All
                 of it was written in Java.
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