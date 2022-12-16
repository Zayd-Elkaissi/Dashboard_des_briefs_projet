import axios from 'axios';
import React, { Component } from 'react';
import Task from './Task';

class TaskManager extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        id:'',
        taskName:'',
        data:[]
     }

     componentDidMount() {
        this.component();
     }

     component = (e) => {
        axios.get("http://127.0.0.1:8000/api/task")
        .then(res=>{
            this.setState({ 
                data:res.data 
             });
        })
         
     };
     handelChange = (e) => {
         this.setState({ 
            taskName:e.target.value
          });
     };

     AddTaskClick = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/task", this.state)
        .then(res=>{
            this.component();
            this.state.taskName =''
        })
     };

     handelEdit = (id) => {
        axios.get("http://127.0.0.1:8000/api/task/"+id+"/edit" )
        .then(res=>{
            this.setState({ 
                id:res.data.id,
                taskName:res.data.name
                
              });
             
        })
         document.getElementById('Add').style.display = 'none';
         document.getElementById('Update').style.display = 'inline-block';
     };
     
     handelUpdate = (e) => {
        e.preventDefault();
        let id = this.state.id;
        axios.put("http://127.0.0.1:8000/api/task/"+id, this.state )
        .then(res=>{
            this.component();
            this.state.taskName =''
        })
     };

     handelRemove = (id) => {
        axios.delete("http://127.0.0.1:8000/api/task/"+id )
        .then(res=>{
            this.component();

        })
     };

    render() { 
        return ( 
            <div>
                <form action="">
                    <input type="text" value={this.state.taskName} onChange={this.handelChange}/>
                    <button id='Add' onClick={this.AddTaskClick}>Add</button>
                    <button id='Update' style={{display:'none'}} onClick={this.handelUpdate}>Update</button>
                </form>
            <Task data={this.state.data} remove={this.handelRemove} edit={this.handelEdit}/>

            </div>
         );
    }
}
 
export default TaskManager;