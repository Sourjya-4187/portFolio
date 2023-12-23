import { CssOutlined, ExpandMore, HtmlOutlined, IntegrationInstructionsOutlined, JavascriptOutlined } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Chip, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

let Bg = require('../images/Nbg.jpg');

const theme = createTheme({
    typography: {
      fontFamily:'Oswald'
    },});

const Styles = {
    boxStyling:{
        position:'relative',
        boxShadow:'0 -4px 8px -5px #333'
    },
    projectContainer:{ 
        display:'flex', 
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:'20px',
        gap:'15px' 
    },
    firstProject:{
        minWidth:'300px',
        margin:'0 auto',
        width:'48%',
        display:'inline-block'
    },
    captionStyle:{
        textAlign:'justify',
        padding:'0 10px',
        display:'block'
    },
    projectHeader:{
        fontSize:'1.4em',
        padding:'20px'
    },
    firstChipRow:{
        textAlign:'left',
        padding:'10px',
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        columnGap:'10px',
        marginTop:'24px'
    },
    secondChipRow:{
        textAlign:'left',
        padding:'10px',
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        columnGap:'10px',
        flexWrap:'wrap',
        rowGap:'10px'
    },
    iconStyle:{
        height:'20rem',
        fontSize:'2.5pc'
    },
    accordianStyle:{
        textAlign:'left',
        padding:'10px',
    }
}

const Projects = () => {
    return(
        <>
            <ThemeProvider theme={theme}>
                <div className="topic-container middle-container-image" style={{ backgroundImage:{Bg}}}>
                    <div style={{marginBottom:'40px'}} id='projects'>
                        <div style={Styles.boxStyling}>
                            <div style={{padding:'0 0 30px'}}>
                                <div style={{fontSize:'3em',padding:'10px',color:'white'}}>
                                    Projects
                                </div>
                                <div style={Styles.projectContainer}>
                                    {/* PROJECT CONTAINER */}
                                    <div style={Styles.firstProject} id='Digital Bank UI'>
                                        <Typography sx={Styles.projectHeader}color='white'>
                                            Digital Bank UI
                                        </Typography>
                                        <div style={Styles.captionStyle}>
                                            <Typography variant="caption" color='gray' >
                                                Integrated the APIs to ensure real-time updates on the bank's website.
                                                Actively collaberated and played a key role in delivering a high-quality UI. 
                                            </Typography>
                                        </div>
                                        <div style={Styles.firstChipRow}>
                                            <Chip icon={<HtmlOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="success" variant="outlined" />
                                            <Chip icon={<CssOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="primary" variant="outlined" />
                                            <Chip icon={<JavascriptOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="success" variant="outlined" />
                                        </div>
                                        <div style={Styles.accordianStyle}>
                                            <Accordion sx={{backgroundColor:'cornsilk'}}>
                                                <AccordionSummary expandIcon={<ExpandMore />}>
                                                    <Typography>See Task and Responsibility</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography list={true}>
                                                    <ul>
                                                        <li>Connected APIs smoothly using Axios for real-time updates on the bank's site.</li>
                                                        <li>Used JavaScript to make the website dynamic and engaging.</li>
                                                        <li>Built good-looking and user-friendly pages with HTML and CSS</li>
                                                        <li>Turned Figma designs into working website elements..</li>
                                                        <li>Checked and fixed any issues for people using different web browsers.</li>
                                                        <li>Made sure the site works well on all devices with responsive design.</li>
                                                    </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                    
                                    <div style={Styles.firstProject} id="Ad Manager UI">
                                        <Typography sx={Styles.projectHeader}color='white'>
                                            Ad Manager UI
                                        </Typography>
                                        <div style={Styles.captionStyle}>
                                            <Typography variant="caption" color='gray' >
                                                Part of the dynamic team which built an in-house Ad Manager on React, serving ads dynamically using
                                                Backend APIs. Actively contributed to the successful implementation of a robust and user-friendly advertising solution.
                                            </Typography>
                                        </div>

                                        <div style={Styles.secondChipRow}>
                                            <Chip icon={<IntegrationInstructionsOutlined sx={{height:'20rem',fontSize:'1.0pc'}} />} label='REACT' sx={{padding:'16px'}} color="success" variant="outlined" />
                                            <Chip icon={<JavascriptOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="primary" variant="outlined" />
                                            <Chip icon={<HtmlOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="success" variant="outlined" />
                                            <Chip icon={<CssOutlined sx={Styles.iconStyle} />} sx={{padding:'16px'}} color="primary" variant="outlined" />
                                        </div>
                                        
                                        <div style={Styles.accordianStyle}>
                                            <Accordion sx={{backgroundColor:'cornsilk'}}>
                                                <AccordionSummary expandIcon={<ExpandMore />}>
                                                    <Typography>See Task and Responsibility</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography list={true}>
                                                    <ul>
                                                        <li>Led React-based Ad Manager development, ensuring dynamic ad serving via Backend APIs.</li>
                                                        <li>Proactively identified and implemented innovative solutions, contributing to system robustness.</li>
                                                        <li>Collaborated seamlessly with cross-functional teams, fostering a positive and efficient work environment.</li>
                                                        <li>Utilized state management techniques in React for seamless data flow and real-time updates</li>
                                                    </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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

export default Projects;