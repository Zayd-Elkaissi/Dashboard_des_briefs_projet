import React, { Component } from 'react';
import axios from 'axios'
import Task from './Task';


export default class TaskManager extends Component {
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
     
     handelClick =async(e) => {
        e.preventDefault()
        await axios.post("http://127.0.0.1:8000/api/task",this.state)
         .then(res=>{
            this.component();
            this.state.taskName= ''

         })
     };

     handelEdit = (id) => {
         axios.get("http://127.0.0.1:8000/api/task/" + id + "/edit")
         .then(res=>{
            this.setState({ 
                id:res.data.id,
                taskName:res.data.name  
                
            });
         })
        // Add Button
         document.getElementById("Add").style.display = "none";
        //  Update Button
         document.getElementById("update").style.display = "inline-block";
     };

     handelUpdate =(e) => {
        e.preventDefault();
        let id = this.state.id;
         axios.put("http://127.0.0.1:8000/api/task/"+ id,this.state)
         .then(res=>{
            this.component()
            this.state.taskName = ''
         })

        // Add Button
          document.getElementById("Add").style.display = "inline-block";
        //  Update Button
          document.getElementById("update").style.display = "none";
     };

     handelDelete = (id) => {
         axios.delete("http://127.0.0.1:8000/api/task/"+id)
         .then(res=>{
            this.component()

         })
     };
     
    render() { 
        return ( 
            <div>
                
                <input className='form' type="text"value={this.state.taskName} onChange={this.handelChange}/>
                <button className='btn btn-outline-secondary' id='Add' onClick={this.handelClick}>Add</button>
                <button className='btn btn-outline-warning' id='update' style={{display:'none'}} onClick={this.handelUpdate}>update</button>
            
                <Task data={this.state.data} remove={this.handelDelete} edit={this.handelEdit} />
            </div>
         );
    }
}

