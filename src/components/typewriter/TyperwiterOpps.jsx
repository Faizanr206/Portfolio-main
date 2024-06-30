
import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
 
function TyperwiterOpps() {
    return (
        <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("Opps! there is nothing to see.")
                        .start();
                }}
            />
        </div>
    );
}
 
export default TyperwiterOpps;