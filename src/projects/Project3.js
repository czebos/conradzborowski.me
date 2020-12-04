import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import gif1 from './gifs/1.gif'
import gif2 from './gifs/2.gif'

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
                <div className='project3 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Stratum.ai R&D</div>
                        <div className='bottomtext'>Iteratively improving a Startup's interface</div>
                    </div>
                </div>
                <b>Using multiple levels of feedback, we redesigned the interface for a startup.</b>
                <br></br>
                <div className='centered-title'> Introduction</div>
                This project is about iteratively designing an interface and improving on it with more and more feedback. Our first step was to brainstorm sketches for new inteface designs for the start up Stratum AI. Our next step was to create a High Fidelity mockup of the design. Then we had some feedback from users in the class on the design, and we improved on it. Finally, we had random users use the interface and tell us about the experience.
                <br></br>
                <br></br>

                <div className='centered-title'> New Interface</div>
                <td className ='blue' id="fullsize" onClick={() => window.open("https://www.figma.com/proto/Tx3Sm5TDwee3pCuSORfIBL/Stratum.ai-redesign?node-id=2%3A6&scaling=min-zoom", '_blank')} >
                    <div className='just-centered'> <div className='image2'></div> </div>
                </td>
                <div className='centered-title'> Users Using Interface</div>
                <div id="gifs">
                    <img src={gif1} class="gif" />
                    <img src={gif2} class="gif" />
                </div>
                <br></br>

                <div className='centered-title'> Users Critique</div>
                When learning about the process, the users found that the size of the boxes of the info were a little to overwhelming. The size of the data was a little too large as well. They mentioned that the site is good for someone who is already interested in the website, and it does well for the specific scenario(someone who is interested in using AI for mining). <br></br> <br></br> The color scheme could pop out more for the interface. One felt that the arrows should be left and right. The site looked like a powerpoint/mobile type of look, but the user would most likely be doing this research on a website.
              The users seemed to not have a problem with directly completeing the tasks. They found how to contact the owner easily and learned about the company easily. The problem
              that <br></br> <br></br> they had with the process was that they found the interface confusing, given the tasks. However, the actual completition of the tasks was easy for the users. If we could change the website in someway, we would changed the interface to be
              less zoomed in, and make the process more of a scrolling experience rather than a powerpoint type feel.
                <br></br>
                <br></br>
                <div className='just-centered'> Interesting in learning more about the project? Contact me at
                </div>
                <a className='just-centered' href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
            </div>
        </div>
    );
}

export default project3;