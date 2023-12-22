import { ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

let Bg = require('../images/Nbg.jpg');

const theme = createTheme({
    typography: {
      fontFamily:'Oswald'
    },});

const Styles = {
    skillContainer:{
        minWidth:'300px',
        margin:'0 auto',
        padding:'0 10px'
    },
    marginForBar:{
        margin:'5px 0 3px'
    },
    fontAndPadding:{
        fontSize:'1.4em', 
        padding:'20px'
    },
    textAlignInLine:{
        textAlign:'left'
    },
    boxStyling:{
        position:'relative',
        boxShadow:'0 -4px 8px -5px #333'
    }
}

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
        value:95
    },
    {
        name:'Bit bucket',
        value:91
    },
    {
        name:'GIT',
        value:95
    },
    {
        name:'Agile Methodologies',
        value:90
    }
];

const ProgressBarComp = ({props}) => {
    return(
        <div className="progress">
            <div className="progress-value" style={{ '--my-var': `${props}%`}}></div>
        </div>
    ) 
};

const Skills = () =>{
    return(
        <ThemeProvider theme={theme}>
            <div className="topic-container middle-container-image" style={{ backgroundImage:{Bg}}}>
                <div style={{marginBottom:'40px'}} id='skills'>
                    <div style={Styles.boxStyling}>
                        <div style={{padding:'0 0 30px'}}>
                            <div style={{fontSize:'3em',padding:'10px',color:'white'}}>Skills</div>
                            <div style={{ display:'flex', flexDirection:'row',flexWrap:'wrap',marginBottom:'20px',gap:'15px' }}>
                                {/* SKILL CONTAINER */}
                                <div style={Styles.skillContainer} id='Web Technologies'>
                                    <Typography className="body" sx={Styles.fontAndPadding}color='white'>Web Technologies</Typography>
                                    <div>
                                        {
                                            technologyProgressBarvalue.map((item)=>(
                                                    <>
                                                    <Typography color='white' sx={Styles.textAlignInLine}>{item.name}</Typography>
                                                    <div style={Styles.marginForBar}>
                                                        <ProgressBarComp props={item.value} />
                                                    </div>
                                                </>                                             
                                            ))
                                        }
                                    </div>
                                </div>

                                <div style={Styles.skillContainer} id='Libraries and Software'>
                                    <Typography sx={Styles.fontAndPadding}color='white'>Libraries and Software</Typography>
                                        <Typography color='white' sx={Styles.textAlignInLine}>React Router</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={91} />
                                            </div>
                                        <Typography color='white' sx={Styles.textAlignInLine}>Redux</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={81} />
                                            </div>
                                        <Typography color='white' sx={Styles.textAlignInLine}>Material-UI</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={95} />
                                            </div>    
                                        <Typography color='white' sx={Styles.textAlignInLine}>Jest</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={90} />
                                            </div> 
                                        <Typography color='white' sx={Styles.textAlignInLine}>Formik</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={40} />
                                            </div>
                                        <Typography color='white' sx={Styles.textAlignInLine}>Figma</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={61} />
                                            </div>
                                </div>

                                <div style={Styles.skillContainer} id='Operations'>
                                    <Typography sx={Styles.fontAndPadding}color='white'>Operations</Typography>
                                        <div>
                                            {
                                                projectProgressBar.map((item)=>(
                                                    <>
                                                        <Typography color='white' sx={Styles.textAlignInLine}>{item.name}</Typography>
                                                            <div style={Styles.marginForBar}> 
                                                                <ProgressBarComp props={item.value} />
                                                            </div>
                                                    </>
                                                ))
                                            }
                                        </div>
                                </div>

                                <div style={Styles.skillContainer} id='JS Bundlers'>
                                    <Typography sx={Styles.fontAndPadding}color='white'>JS Bundlers</Typography>
                                        <Typography color='white' sx={Styles.textAlignInLine}>Webpack</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={91} />
                                            </div>
                                        <Typography color='white' sx={Styles.textAlignInLine}>Vite</Typography>
                                            <div style={Styles.marginForBar}> 
                                                <ProgressBarComp props={90} />
                                            </div>
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