import React from 'react';

type ClockState = {
    time: Date
}

class Clock extends React.Component<{}, ClockState> {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };

    componentWillMount() {
        this.tick();
    };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}