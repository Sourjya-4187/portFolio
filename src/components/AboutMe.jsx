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

const AboutMe = ({darkMode='true'}) => {
    return(
        <ThemeProvider theme={theme}>
            <div className='middle-container-image'>
                <div className='aboutUs-bg'>
                    <div>
                    <Card sx={{ maxWidth: 345 }}>
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

                    <div>
                    <Card sx={{ maxWidth: 345 }}>
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
                            <Typography size="small">UI-Bank Website</Typography>
                            <Typography size="small">UI-Ad Server</Typography>
                        </CardActions>
                    </Card>
                    </div>
                    
                    <div>
                    <Card sx={{ maxWidth: 345 }}>
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
                            <Typography size="small">Interest</Typography>
                            <Typography size="small">Education</Typography>
                            <Typography size="small">Work Experience TimeLine</Typography>
                            <Typography size="small">Languages</Typography>
                            <Typography size="small">Contact Me</Typography>
                        </CardActions>
                    </Card>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
};

export default AboutMe;