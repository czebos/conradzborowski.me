import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Arrow90degLeft } from 'react-bootstrap-icons';

const project1 = () => {
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
                <div className='project3-2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext2'>PiButtlerfly Implementation </div>
                        <div className='bottomtext2'>Researching/Implementing a security algorithm</div>
                    </div>
                </div>
                <div className='divide'>
                    <b className='value'> Strategies:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Cybersecurity, Research</div>
                    </b>
                    <b className='value'> Timeline:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> May-Aug 2018</div>
                    </b>
                    <b className='value'> GitHub:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}>  <a href='https://github.com/czebos/PiButterfly'>PiButterfly </a></div>
                    </b>
                    <b className='value'> Languages:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Go</div>
                    </b>
                </div>
                <br></br>
                <div className='app-info'>
                <div className='centered-title'> Project Description</div>
                 Over the summer, I was a Research Assistant for a Security Professor at Brown University.
                 I helped with research and implementation of an algorithm.
                 <br></br> <br></br>
                 I first did research on onion routing and security protocols. Then, I implemented
                 an onion routing algorithm that we designed together. We then simulated the routing
                 to check its scalability and robustness. 
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

export default project1;