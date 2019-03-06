import React from 'react';
import dice from "../diceroll.gif"

class DiceRoll extends React.Component {
    constructor(props){
        super(props)
        this.state = { 

        }
    }
    render(){
        const styling = {
            height: "100VH", 
            width: "100VW", 
            backgroundColor: "black",
            zIndex: "1"
        }
        return (
            <React.Fragment>
                <div style={styling}>
                    <img src={dice} alt="dice roll" />
                </div>
            </React.Fragment>
        )
    }
}

export default DiceRoll