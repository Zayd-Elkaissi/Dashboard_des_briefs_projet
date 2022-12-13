import './App.css';
import axios from 'axios';
import React from 'react';
import Task  from './component/Task';
import Chart from './component/Chart';
class App extends React.Component {
  state ={
    data:[],

}
async componentDidMount(){
  await axios.get("http://127.0.0.1:8000/api/task")  
  .then(res=>
    // console.log(res.data)
    this.setState({
        data:res.data
    })
        )
}
  render(){
  
    console.log(this.state)
  return (
    <div className="App">
     Hello
     <Task />
     <Chart Data={this.state.data} />
     <div id='acquisitions'></div>
    </div>
  );
}
}

export default App;
