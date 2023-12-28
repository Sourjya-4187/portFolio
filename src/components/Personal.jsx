import React from "react";
import {ThemeProvider, Typography, createTheme } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { WorkHistory } from "@mui/icons-material";
import logo from "../images/Logo_vssut.svg";
import hindiLogo from '../images/hindi-letter.svg';

let schoolIcon = require('../images/school.png');
let collegeIcon = require('../images/kbrclogo.png');
let odiaIcon = require('../images/ODIA.png');
let engIcon = require('../images/eng.png');
let basketballIcon =require('../images/Basketball.png');
let cricketIcon=require('../images/Cricket.png');
let workoutIcon=require('../images/workout.png');
let travelIcon=require('../images/travel.png');

const theme = createTheme({
    typography: {
      fontFamily:'Oswald'
    },});

const Styles = {
    boxStyling:{
        position:'relative',
        boxShadow:'0 -4px 8px -5px #333'
    }
}

const Personal = () => {
    return(
        <>
           <ThemeProvider theme={theme}>
                <div className="topic-container middle-container-image">
                    <div style={{marginBottom:'40px'}} id='personal'>
                        <div style={Styles.boxStyling}>
                            <div style={{padding:'0 0 30px'}}>
                                <div style={{fontSize:'3em',padding:'10px',color:'white'}}>
                                    Personal
                                </div>

                                {/* TimeLine Section starts */}
                                <div style={{ maxWidth:'500px', margin:'auto' }} id="Work Experience TimeLine">
                                    <div style={{fontSize:'1.4em',padding:'20px',color:'white'}}>
                                        TimeLine
                                    </div>
                                        <Timeline position="alternate">
                                            {/* 1ST JOB */}
                                            <TimelineItem>
                                                <TimelineOppositeContent 
                                                    sx={{ m: 'auto 0' }} 
                                                    align="right" 
                                                    variant="body2" 
                                                    color="white"
                                                >
                                                Lowe's India
                                                </TimelineOppositeContent>
                                                    <TimelineSeparator>
                                                        <TimelineConnector />
                                                            <TimelineDot>
                                                                <WorkHistory color="success" />
                                                            </TimelineDot>
                                                        <TimelineConnector />
                                                    </TimelineSeparator>
                                                <TimelineContent 
                                                    sx={{ py: '12px', px: 2, display:'flex',flexDirection:'column' }}
                                                >
                                                    <Typography variant="h6" component="span" color='white' >
                                                        Software Engineer
                                                    </Typography>
                                                    <Typography variant="caption" color='white'> 
                                                        Jul 2022 - Present · 1 yr 6 mos - Bengaluru, Karnataka, India
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                            {/* 2ND JOB */}
                                            <TimelineItem>
                                                <TimelineOppositeContent 
                                                    sx={{ m: 'auto 0' }} 
                                                    align="right" 
                                                    variant="body2" 
                                                    color="White"
                                                >
                                                Infosys
                                                </TimelineOppositeContent>
                                                    <TimelineSeparator>
                                                        <TimelineConnector />
                                                            <TimelineDot>
                                                                <WorkHistory color="primary" />
                                                            </TimelineDot>
                                                        <TimelineConnector />
                                                    </TimelineSeparator>
                                                <TimelineContent 
                                                    sx={{ py: '12px', px: 2, display:'flex',flexDirection:'column' }}
                                                >
                                                    <Typography variant="h6" component="span" color='white' >
                                                        Technology Analyst
                                                    </Typography>
                                                    <Typography variant="caption" color='white'> 
                                                        Aug 2021 - Jul 2022 · 1 yr
                                                    </Typography>
                                                    <Typography variant="h6" component="span" color='white' >
                                                        Senior System Engineer
                                                    </Typography>
                                                    <Typography variant="caption" color='white'> 
                                                        Jun 2020 - Aug 2021 · 1 yr 3 mos
                                                    </Typography>
                                                    <Typography variant="h6" component="span" color='white' >
                                                        System Engineer
                                                    </Typography>
                                                    <Typography variant="caption" color='white'> 
                                                        Jun 2018 - May 2020 · 2 yrs
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                </div>
                                {/* TimeLine Section ends */}
                                <div style={{ display:'flex',justifyContent:'space-between',flexDirection:'row',columnGap:'12px',paddingLeft:'8px',paddingRight:'8px',flexWrap:'wrap'}}>
                                    <div style={{display:'inline-block'}} id="Education">
                                        <div style={{fontSize:'1.4em',padding:'20px',color:'white'}}>
                                            Education
                                        </div>
                                        {/* 1st */}
                                            <div style={{display:'flex',textAlign:'left'}}>
                                                <div style={{minWidth:'70px',marginLeft:'10px'}}>
                                                    <img style={{height:'60px',padding:'5px'}} src={logo} alt="Vssut Burla"/>
                                                </div>
                                                <div style={{paddingLeft:'8px'}}>
                                                    <Typography sx={{fontSize:'1em'}} color='white'>Bachelor of Technology</Typography>
                                                    <div style={{display:'flex',flexDirection:'row',columnGap:'8px',alignItems:'baseline'}}>
                                                        <Typography variant="caption" color='white'>Veer Surendra Sai University & Technology, Burla</Typography>
                                                        <a href="https://www.vssut.ac.in/" target="_blank" rel="noreferrer">↗</a>
                                                    </div>
                                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                                        <Typography variant="caption" color='white'>2014 - 2018</Typography>
                                                        <div style={{display:'inline-block',float:'right'}}>
                                                            <Typography variant="caption" color='white'>8.40</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        {/* 2nd */}
                                            <div style={{display:'flex',textAlign:'left'}}>
                                                <div style={{minWidth:'70px',marginLeft:'10px'}}>
                                                    <img style={{height:'60px',padding:'5px'}} src={collegeIcon} alt="KBRC Cuttack"/>
                                                </div>
                                                <div style={{paddingLeft:'8px'}}>
                                                    <Typography sx={{fontSize:'1em'}} color='white'>Higher Secondary School</Typography>
                                                    <div style={{display:'flex',flexDirection:'row',columnGap:'8px',alignItems:'baseline'}}>
                                                        <Typography variant="caption" color='white'>Kalinga Bharati Residential College, Cuttack</Typography>
                                                        <a href="https://www.kalingabharati.com/" target="_blank" rel="noreferrer">↗</a>
                                                    </div>
                                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                                        <Typography variant="caption" color='white'>2011 - 2013</Typography>
                                                        <div style={{display:'inline-block',float:'right'}}>
                                                            <Typography variant="caption" color='white'>80%</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* 3rd */}
                                            <div style={{display:'flex',textAlign:'left'}}>
                                                <div style={{minWidth:'70px',marginLeft:'10px'}}>
                                                    <img style={{height:'60px',padding:'5px'}} src={schoolIcon} alt="Vssut Burla"/>
                                                </div>
                                                <div style={{paddingLeft:'8px'}}>
                                                    <Typography sx={{fontSize:'1em'}} color='white'>Secondary School</Typography>
                                                    
                                                        <Typography variant="caption" color='white'>Angul High School, Angul</Typography>
                                              
                                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                                        <Typography variant="caption" color='white'>2008 - 2011</Typography>
                                                        <div style={{display:'inline-block',float:'right'}}>
                                                            <Typography variant="caption" color='white'>8.40</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div style={{display:'inline-block'}} id="Languages">
                                        <div style={{fontSize:'1.4em',padding:'20px',color:'white'}}>
                                            Languages
                                        </div>
                                        <div style={{display:'inline-block'}}>
                                            <img style={{height:'60px',margin:'0 10px'}} src={odiaIcon} alt="ODIA"/>  
                                            <img style={{height:'60px',margin:'0 10px'}} src={hindiLogo} alt="HINDI"/> 
                                            <img style={{height:'60px',margin:'0 10px'}} src={engIcon} alt="ENGLISH"/>                                                
                                        </div>
                                    </div>

                                    <div style={{display:'inline-block'}} id="Interests">
                                        <div style={{fontSize:'1.4em',padding:'20px',color:'white'}}>
                                            Interests
                                        </div>
                                        <div style={{display:'inline-block'}}>
                                            <img style={{height:'60px',margin:'0 10px'}} src={cricketIcon} alt="CRICKET"/>
                                            <img style={{height:'60px',margin:'0 10px'}} src={workoutIcon} alt="GYM"/>
                                            <img style={{height:'60px',margin:'0 10px'}} src={basketballIcon} alt="BASKETABLL"/>  
                                            <img style={{height:'60px',margin:'0 10px'}} src={travelIcon} alt="TRAVEL"/>                                                
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>  
                </div>
           </ThemeProvider>
        </>
    )
};

export default Personal;