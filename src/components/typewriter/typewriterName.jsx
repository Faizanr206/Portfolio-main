
import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
 
function TyperwiterName() {
    return (
        <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("Faizan ur Rehman")
                        .start();
                }}
            />
        </div>
    );
}
 
export default TyperwiterName;