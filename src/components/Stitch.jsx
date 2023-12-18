import React from "react";

let leftLogo = require('../images/physics.gif');
let rightLogo = require('../images/coding.png');

const Stitch = () => {
    return(
        <>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{alignSelf:'flex-start',backgroundColor:'white'}}>
                <img src={leftLogo} alt='Left Logo' className="paper-icon"/>
            </div>
            <div style={{alignSelf:'flex-end'}}>
                <img src={rightLogo} alt='Right Logo'className="paper-icon"/>
            </div>
        </div>
        </>
    )
}

export default Stitch;