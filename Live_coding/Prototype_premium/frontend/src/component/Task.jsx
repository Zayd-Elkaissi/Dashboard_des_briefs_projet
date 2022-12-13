import React, { Component } from 'react';
import axios from 'axios'

class Task extends Component {
    state = { 
        id:'',
        taskName:'',
        data:[]
     } 
   

     componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/task")
            .then(res=>{
                this.setState({
                     data:res.data
                });
            })
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
            this.component()

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
                
                    <input type="text"value={this.state.taskName} onChange={this.handelChange}/>
                    <button id='Add' onClick={this.handelClick}>Add</button>
                    <button id='update' style={{display:'none'}} onClick={this.handelUpdate}>update</button>
                

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((value)=>(
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td> <button onClick={()=> this.handelDelete(value.id)}>Delete</button>
                                <button className='ms-3' onClick={()=> this.handelEdit(value.id)}>Edit</button>
                                
                                </td>
                               </tr>
                               ))}
                            </tbody>
                    </table>



            </div>
        );
    }
}
 
export default Task;