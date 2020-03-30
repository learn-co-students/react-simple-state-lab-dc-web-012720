import React from 'react';

export default class Cell extends React.Component {
    constructor(props){
        super()
        this.state = {color: props.value}
    }

    change_color = () => {
        const new_color = '#333'
        this.setState({color: new_color})
    }

    render(){
        const bg_color = this.state.color
        return (
            <div className="cell" style={{backgroundColor: bg_color}} onClick={this.change_color}>

            </div>
        )
    }
}