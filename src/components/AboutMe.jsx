import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, ThemeProvider, createTheme } from '@mui/material';

let skillsSvg = require('../images/skills.jpg');
let projectSvg = require('../images/projectSvg.jpg');
let aboutMeSvg = require('../images/AboutMe.jpg');

const theme = createTheme({
    typography: {
      fontFamily:'Oswald'
    }
});

const AboutMe = () => {
    return(
        <ThemeProvider theme={theme}>
            <div className='middle-container-image'>
                <div className='aboutUs-bg'>
                    <div className='box-container'>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            src={skillsSvg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Skills
                            </Typography>
                        </CardContent>
                        <CardActions style={{display:'flex',flexDirection:'column',minHeight:'161px',maxHeight:'max-content'}}>
                            <a href='#Web Technologies' className='anchor-links'>Web Technologies</a>
                            <a href='#Libraries and Software' className='anchor-links'>Libraries and Software</a>
                            <a href='#Operations' className='anchor-links'>Operations</a>
                            <a href='#JS Bundlers' className='anchor-links'>JS Bundlers</a>
                        </CardActions>
                    </Card>
                    </div>

                    <div className='box-container'>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            src={projectSvg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Projects
                            </Typography>
                        </CardContent>
                        <CardActions style={{display:'flex',flexDirection:'column',minHeight:'161px',maxHeight:'max-content'}}>
                            <a href='#Digital Bank UI' className='anchor-links'>Digital Bank UI</a>
                            <a href='#Ad Manager UI' className='anchor-links'>Ad Manager UI</a>

                        </CardActions>
                    </Card>
                    </div>
                    
                    <div className='box-container'>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            src={aboutMeSvg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                About Me
                            </Typography>
                        </CardContent>
                        <CardActions style={{display:'flex',flexDirection:'column',minHeight:'161px',maxHeight:'max-content'}}>
                            <a href='#Interests' className='anchor-links'>Interests</a>
                            <a href='#Education' className='anchor-links'>Education</a>
                            <a href='#Work Experience TimeLine' className='anchor-links'>Work Experience TimeLine</a>
                            <a href='#Languages' className='anchor-links'>Languages</a>
                            <a href='#Contact' className='anchor-links'>Contact Me</a>
                        </CardActions>
                    </Card>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
};

export default AboutMe;