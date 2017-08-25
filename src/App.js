import React from 'react';
import Input from '../src/Components/Input'
import '../src/app.css'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            hours:0,
            minutes:0,
            seconds:0,
            initialH:0,
            initialM:0,
            initialS:0
        };

        this.getHours = this.getHours.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
        this.getSeconds = this.getSeconds.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }
    getHours(val) {
        this.setState({hours: val});

    }
    getMinutes(val){
        this.setState({minutes: val});
    }
    getSeconds(val){
        this.setState({seconds: val});
    }
    start(){
        this.setState({initialH:this.state.hours, initialM:this.state.minutes, initialS:this.state.seconds})
        window.intervalId = setInterval(()=>{
            if(this.state.seconds > 0 && this.state.minutes >=0 && this.state.hours >=0){
                    let prevSecs = this.state.seconds - 1;
                    this.setState({seconds:prevSecs})
            }
            else if(this.state.seconds === 0 && this.state.minutes > 0 && this.state.hours >=0){
                    let prevMins = this.state.minutes - 1;
                    this.setState({seconds:59, minutes:prevMins})
            }
            else if(this.state.seconds === 0 && this.state.minutes === 0 && this.state.hours > 0){
                let prevHours = this.state.hours - 1;
                this.setState({seconds:59, minutes:59, hours:prevHours})
            }
            else if(this.state.minutes === 0 && this.state.seconds === 0 && this.state.hours === 0) {
                alert('ready');
                clearInterval(window.intervalId)
            }
        }, 1);
    }
    stop(){
        clearInterval(window.intervalId)
    }
    reset(){
        this.stop();
        let initialHours = this.state.initialH;
        let initialMinutes = this.state.initialM;
        let initialSeconds = this.state.initialS;
        this.setState({hours:initialHours, minutes:initialMinutes, seconds:initialSeconds})
    }
      render() {
          let secs = this.state.seconds;
          let mins = this.state.minutes;
          let hors = this.state.hours;
        return (
            <div>
                <h1>Enter hours, minutes and seconds</h1>
                <Input getHours={this.getHours} name="hours"/>
                <Input getMinutes={this.getMinutes} name="minutes"/>
                <Input getSeconds={this.getSeconds} name="seconds"/>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <div>
                    secs : {secs}
                </div>
                <div>
                    mins : {mins}
                </div>
                <div>
                    hours: {hors}
                </div>
            </div>
        )
      }
}

export default App;
