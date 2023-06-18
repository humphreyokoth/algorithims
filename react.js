/** 
*Simple component with JSX syntax to input data passed into the componentt to be
accessed by render() via this.props.
*/ 

class HelloMessage extends React.Component{

    render(){
        return <div>Hello{this.props.name}</div>
    }
}

root.render(<HelloMessage name ="Taylor"/>);

/**
 * Astateful component when a components state changes data
 * markup
 * 
 * 
 */

class Timer extends React.Component{
 constructor(props){
super(props);
this.state = {seconds:0};
}
tick(){
    this.setState(state =>({
        seconds:state.seconds +1
    }));
}

componentDidMount(){
    this.interval = setInterval(()=> this.tick(),1000);
}

componentWillMount(){
    clearInterval(this.interval);
}

render(){
    return (
        <div>
            Seconds:{this.state.seconds}
        </div>
    );
}

};
root.render(<Timer/>);
