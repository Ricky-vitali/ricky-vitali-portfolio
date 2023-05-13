import React, { useState } from 'react';

const AboutList = (props) => {

    return (
        <ul>
           {props.listInfo[0].myInfo[0].personalInfo.map((list) =>(
               <li><strong>{list.infoType}:</strong> {list.infoText}</li>
            ))} 
        </ul>

    )
}


export default AboutList;