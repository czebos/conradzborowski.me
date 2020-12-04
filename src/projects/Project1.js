import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project1 = () => {
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
                <div className='project center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Super Smash Filter</div>
                        <div className='bottomtext'>Desiging and Implementing a React App</div>
                    </div>
                </div>
                <b >I created a React app that implements a list interface. I designed
                 the architecture and the implmented the details.</b>
                <br></br>
                <div className='centered-title'> Introduction</div>
                In this project, I created a simple filtering and sorting system with an aggregator. This means that I had some sort of collection that I could filter and sort by
              some metric. Then I also needed to be able for the user to interact with the product to aggregate it. In this example I had a user make a team from a list of Super
              Smash Bro's Melee Characters. <br></br> <br></br>
                <div className='centered-title'> Goals and Values</div>
                The value of the application is to allow the user to create a Melee Team with easy selecting and sorting. 
              The goal of the assignment is to create and app that uses React and, without using libraries, create a sorting,
              filtering, and aggregation application using good React designed code with states, components and architecture.
                <br></br>
                <br></br>
                <div className='centered-title'> Implementation Details</div>
                Some design considered was using multiple types of listitem components for both the Team and the list. I also considered
              seperating the team and the list by parent, and using the root instead. Finally I considered using multiple classes for more
              modularized code.
                <br></br>
                <br></br>
                <div className='just-centered'> Interesting in learning more about the project? Contact me at
                </div>
                <a className='just-centered' href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
            </div>
        </div>
    );
}

export default project1;