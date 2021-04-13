import React, { Component } from 'react'
import './hamburguer-button.style.css'

function checkedTrueFalse () {
    const checkedOrNot = document.querySelector('.hamburguerButton input')
    if(checkedOrNot.checked === true){
        console.log('true')
        return true
    } else {
        console.log('false')
        return false
    }
}

class HamburguerButton extends Component {
    constructor (props){
        super(props)
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <div className="hamburguerButton">
                <input type="checkbox" onClick={ checkedTrueFalse }></input>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default HamburguerButton