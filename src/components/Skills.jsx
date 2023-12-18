import { LinearProgress, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

let Bg = require('../images/Nbg.jpg');

const theme = createTheme({
    typography: {
      fontFamily:'Oswald'
    },});

const technologyProgressBarvalue = [
    {
        name:'ReactJs',
        value:92
    },
    {
        name:'Javascript',
        value:88
    },
    {
        name:'ECMA Script 6',
        value:95
    },
    {
        name:'Type Script',
        value:78

    },
    {
        name:'CSS 3',
        value:95
    },
    {
        name:'HTML 5',
        value:92
    }
];

const projectProgressBar = [
    {
        name:'Jira',
        value:'95'
    },
    {
        name:'Bit bucket',
        value:'91'
    },
    {
        name:'GIT',
        value:'95'
    },
    {
        name:'Agile Methodologies',
        value:'90'
    }
]

const Skills = () =>{
    return(
        <ThemeProvider theme={theme}>
            <div className="topic-container middle-container-image" style={{ backgroundImage:{Bg}}}>
                <div style={{marginBottom:'40px'}} id='skills'>
                    <div style={{position:'relative',boxShadow:'0 -4px 8px -5px #333'}}>
                        <div style={{padding:'0 0 30px'}}>
                            <div style={{fontSize:'3em',padding:'10px',color:'white'}}>Skills</div>
                            <div style={{ display:'flex', flexDirection:'row',flexWrap:'wrap',marginBottom:'20px',gap:'15px' }}>
                                {/* SKILL CONTAINER */}
                                <div style={{minWidth:'300px',margin:'0 auto',padding:'0 10px'}} id='Web Technologies'>
                                    <Typography className="body" sx={{ fontSize:'1.4em', padding:'20px' }}color='white'>Web Technologies</Typography>
                                    <div>
                                        {
                                            technologyProgressBarvalue.map((item)=>(
                                                    <>
                                                    <Typography color='white'>{item.name}</Typography>
                                                    <LinearProgress
                                                        color="success"
                                                        value={item.value}
                                                        variant='determinate'
                                                        sx={{
                                                            animationDuration: "43s"
                                                          }}
                                                    />
                                                </>                                             
                                            ))
                                        }
                                        
                                    </div>
                                </div>

                                <div style={{minWidth:'300px',margin:'0 auto',padding:'0 10px'}} id='Libraries and Software'>
                                    <Typography sx={{ fontSize:'1.4em', padding:'20px' }}color='white'>Libraries and Software</Typography>
                                    <Typography color='white'>React Router</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={91}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Redux</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={81}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Material-UI</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={95}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Jest</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={90}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Formik</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={40}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Figma</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={61}
                                        variant='determinate'
                                    />
                                </div>

                                <div style={{minWidth:'300px',margin:'0 auto',padding:'0 10px'}} id='Operations'>
                                    <Typography sx={{ fontSize:'1.4em', padding:'20px' }}color='white'>Operations</Typography>
                                        <div>
                                            {
                                                projectProgressBar.map((item)=>(
                                                    <>
                                                        <Typography color='white'>{item.name}</Typography>
                                                        <LinearProgress
                                                            color="success"
                                                            value={item.value}
                                                            variant='determinate'
                                                        />
                                                    </>
                                                ))
                                            }
                                        </div>
                                </div>

                                <div style={{minWidth:'300px',margin:'0 auto',padding:'0 10px'}} id='JS Bundlers'>
                                    <Typography sx={{ fontSize:'1.4em', padding:'20px' }}color='white'>JS Bundlers</Typography>
                                    <Typography color='white'>Webpack</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={90}
                                        variant='determinate'
                                    />
                                    <Typography color='white'>Vite</Typography>
                                    <LinearProgress
                                        color="primary"
                                        value={90}
                                        variant='determinate'
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
};

export default Skills;