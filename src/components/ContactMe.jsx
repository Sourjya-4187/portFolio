import { ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import myqr from '../images/sourjyaQR.svg';
import { FavoriteBorder } from "@mui/icons-material";

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

const ContactMe = () => {
    return(
        <>
            <ThemeProvider theme={theme}>
                <div className="topic-container middle-container-image">
                    <div style={{marginBottom:'40px'}} id='Contact'>
                        <div style={Styles.boxStyling}>
                            <div style={{padding:'0 0 30px'}}>
                                <div style={{fontSize:'3em',padding:'10px',color:'white'}}>
                                    Contact
                                </div>
                                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                                    <div>
                                        <img src={myqr} style={{height:'320px'}} alt="MYQR" />
                                    </div>
                                    <div>
                                        <Typography color='white' sx={{fontSize:'1.7em',padding:'0px 20px 10px'}}>Sourjya Swarup Pradhan</Typography>
                                        <Typography color='white' variant="subtitle1" sx={{padding:'5px 20px 5px 10px'}}>Bangalore, Karnataka, India-560037</Typography>
                                    </div>
                                </div>
                                <div style={{marginTop:'30px'}}>
                                    <hr style={{width:'40%'}}/>
                                      <Typography color='white' variant="body1">Made with React <FavoriteBorder color="primary"/></Typography>
                                        <div style={{display:'block'}}>
                                            <Typography color='white' variant="caption">
                                                Icons are from &nbsp; <a href="https://www.flaticon.com/" className="anchor-links2" target="_blank" rel="noreferrer" >Flaticon</a>
                                                    &nbsp; & &nbsp; <a href="https://www.freepik.com/" className="anchor-links2" target="_blank" rel="noreferrer" >Freepik</a>
                                            </Typography><br/>
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

export default ContactMe;