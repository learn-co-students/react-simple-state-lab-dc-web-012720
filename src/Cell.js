import React from 'react'

// const Cell = (props) => {
//     console.log(props)
//     return (
//         <div> {props.value} </div>
//     )


// }

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div
                style={{ backgroundColor: this.state.color }}
                className="cell"
                onClick={this.changeColor}
            >
            </div>

        )

    }



}

export default Cell