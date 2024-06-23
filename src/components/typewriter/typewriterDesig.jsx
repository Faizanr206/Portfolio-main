
import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
 
function Typerwiterdesignation() {
    return (
        <div className="App">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Full Stack Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("SAP Consultant")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Data Analysist")

                    .start();
                }}
            />
        </div>
    );
}
 
export default Typerwiterdesignation;