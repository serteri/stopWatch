class StopWatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timePassed : 0
        }
        this.timer=null;
        this.start =this.start.bind(this);
        this.stop =this.stop.bind(this);
        this.reset =this.reset.bind(this);

    }

    start(){
        if (!this.timer) {
            let startTime = Date.now();
            this.timer = setInterval(() => {
              const stopTime = Date.now();
              const timePassed = stopTime - startTime + this.state.timePassed;
              this.setState({
                timePassed,
              });
              
              startTime = stopTime;
            }, 250); // Executed every 250 millisecond
          }

    }

    stop() {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      reset() {
        this.stop();
        this.setState({
          timePassed: 0
        })
      }
    render(){
        return(

            <div>
                <h2 className="number">
                {Math.floor(this.state.timePassed / 1000)} s
                </h2>
                <div className='button'>
                    <button className="button button-1" onClick={this.start}>start</button>
                    <button className="button button-2" onClick={this.stop}>stop</button>
                    <button className="button button-3" onClick={this.reset}>reset</button>
            
                </div>

            </div>

        )
    }

}

ReactDOM.render(
    <StopWatch />,
    document.getElementById('root')
  );
