import React, { Component } from 'react'
// import Navbar from "./Components/Navbar";


const THEMES = ['JE', 'VEUX', 'PARLER', 'ALLEMAND']


class Block extends Component {

    render() {

        let style = {
            backgroundColor: this.props.hexCode
        }

        return(
            <div className={"Element_" + this.props.index} style={style} onClick={() => this.props.update(this.props.index)}>
                <p>{this.props.text}</p>
            </div>
        )
    }

}


class App extends Component {

    constructor () {
        super();
        this.state = {
            blocksQuant: THEMES.length,
            elements: [],
        };
        for (let i=0; i < this.state.blocksQuant; i +=1){
            this.state.elements.push({hexCode: this.generateColor(),
                wordToShow: THEMES[i]})
        }
    }

    generateColor() {
        return '#' + Math.random().toString(16).substr(-6)
    }

    // arrow function to preserve this
    updateColor =(index) => {
        let elements = this.state.elements.slice();
        const newColor = this.generateColor();
        elements[index].hexCode = newColor;
        this.setState({
            elements: elements
        })
    }

    render(){
        return (
            <div className="container">
                {this.state.elements.map((element, index) => (
                    <Block key={index} index={index} hexCode={element.hexCode} text={element.wordToShow}
                           update={this.updateColor}/>
                ))}
            </div>
        )
    }
}


export default App
