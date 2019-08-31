import React from 'react';

class Time extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    }
  }

  componentDidMount(){
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  updateTime = () => {
    this.setState({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    })
  }
  
  render(){
    const {hour, minute, second} = this.state;
    return(
      <div className="management-time">
        <span className="time">
          <span className="actual-time-string">Aktualny czas |</span>
          <span className="hour-minute-second">
            {hour < 10 ? '0' + hour : hour}: 
              {minute < 10 ? '0' + minute : minute}:
                {second < 10 ? '0' + second : second}
          </span>
        </span>
      </div>
    );  
  }
}

export default Time;