import React, { Component } from 'react';
import Progress from 'react-progress';

class LoadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        };
    }
    componentDidMount() {
        this.progressBar= setInterval(()=> {
                if(this.state.progress < 100) 
                    this.progress()
                else 
                    clearInterval(this.progressBar);
            }, 5);
        
    }
    componentWillUnmount() {
        clearInterval(this.progressBar);
    }
    progress() {
        let progress=this.state.progress;
        progress += 10;
        this.setState({ progress });
    }
    render() {
        return (
            <Progress percent={this.state.progress}/>
        )
    }
}

export default LoadingPage;
