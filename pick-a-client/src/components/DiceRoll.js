import React from 'react';
import dice from "../diceroll.gif"

class DiceRoll extends React.Component {
    constructor(props){
        super(props)
        this.state = { 

        }
    }
    render(){
        const backgroundStyling = {
            height: "100VH", 
            width: "100VW", 
            backgroundColor: "black",
            zIndex: "1000",
            position: "absolute"
        }

        const diceStyle = {
            textAlign: "center",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
            width: "20%",
            paddingTop: "100px"
        }

        const textStyle = {
            color: "white",
            textAlign: "center"
        }

        return (
            <React.Fragment>
                <div style={backgroundStyling}>
                    <img style={diceStyle} src={dice} alt="dice roll" />
                    <h3 style={textStyle} >Generating...</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default DiceRoll