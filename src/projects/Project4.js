import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project3 = () => {
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
                <div className='project4 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Stratum.ai R&D</div>
                        <div className='bottomtext'>Iteratively improving a Startup's interface</div>
                    </div>
                </div>
                <b>I Alpha/Beta tested a cactus website, and did analysis on the results.</b>
                <br></br>
                <div> I made changes to a cacti purchasing website and had two versions.
                Different users used different versions of the website. I tracked the
                clicks and time spent on the site via logs. With the results I saw
                if one version had more time spent or had more clicks, using
                statistical analysis.

                </div>
                <br></br>
                <div className='centered-title'> Interface Differences</div>
                <ul>
                    <li>A has a border around the items</li>
                    <li>A's text boxes and buttons are oriented horizontally</li>
                    <li>B's text is bigger</li>
                    <li>B's button is smaller</li>
                </ul>
                <br></br>

                <div className='centered-title'> A/B Hypothesis</div>
                The null hypothesis for time completion is "A and B will have the same time completion." The alternate hypothesis for time completion is "A and B will not have the same time completion." The null hypothesis for return rate is "A and B will have the same return rate." The alternate hypothesis for return rate is "A and B will not have the same return rate."
                <br></br> <br></br>
                To collect the data, we created a website that with 50% probablity went to either type A or type B. Then, the user would add catci to its his/her cart and make clicks to do so. These clicks would be logged. With these logs, we would create our data (return rate, time spent on website). The time spent was determined based on the first and last click on the wesbite. Return rate was deterimened by the user reloading the website.
                <br></br>
                <br></br>

                <div className='centered-title'> Conclusions</div>
                <li>A big limitation was that there was not enough data points. With more data points, we would be closer to how users actually behaved</li>
                <li>Another limitaion was that users were 'faking' the website, not actually using it. The experience would be different if users genuinely used it</li>
                <li>We did learn that the users would stay slightly longer on the site when the button was smaller, probably implying the time to click the button</li>
                <li>The easier to parse version (Version A) was stayed on less long, implying parsing time factors into the equation</li>
                <br></br>
                <div className='just-centered'> Interesting in learning more about the project? Contact me at
                </div>
                <a className='just-centered' href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
            </div>
        </div>
    );
}

export default project3;