import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Arrow90degLeft, Arrow } from 'react-bootstrap-icons';

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
                <div className='project-2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext2'>Google Ads Internship</div>
                        <div className='bottomtext2'>Caching intermediate steps of integration testing</div>
                    </div>
                </div>
                <div className='divide'>
                    <b className='value'> Strategies:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Software Engineering, Backend</div>
                    </b>
                    <b className='value'> Timeline:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> May-Aug 2019</div>
                    </b>
                    <b className='value'> GitHub:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> N/A</div>
                    </b>
                    <b className='value'> Languages:
                    <div style={{fontWeight:'normal',fontSize:'16px'}}> Python, Bazel</div>
                    </b>
                </div>
                <br></br>
                <div className='app-info'>
                <div className='centered-title'> Project Description</div>
                 Over the summer, I was a Software Engineering Intern at Google. I interned in Mountain View
                 on the Ads team.
                 <br></br> <br></br>
                 My project was open-ended and many design docs were created and design choices were considered. I worked on caching intermediate steps in an integration test. This shortened testing time,
                 by using the cache layer if test runs resulted in the same input and values at any given step
                 in the integration test.
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