import React, { Component } from 'react';
import axios from 'axios';

export class Task extends Component {

    state={
        id:'',  
        taskName:"",
        data:[]
    }

    async componentDidMount(){
        await axios.get("http://127.0.0.1:8000/api/task")  
        .then(res=>{
          // console.log(res.data)
          this.setState({
              data:res.data
          
          })
             }
              )}


    handleChange=(e)=>{
        this.setState({
            taskName:e.target.value
        })
    }
     handleClick=async(e)=>{
    e.preventDefault()
    await axios.post("http://127.0.0.1:8000/api/task",this.state)
    .then(res=>{
        // alert('Data has been add')
        window.location.reload()
    }
        )
}

                handleEdit=(id)=>{
                    axios.get('http://127.0.0.1:8000/api/task/'+id+'/edit')
                    .then(res=>{
                        console.log(res.data)
                            this.setState({
                                taskName:res.data.name,
                                id:res.data.id
                            })
                        
                    })
                   
                    let btnAdd= document.querySelector("#btnAdd");
                    let btnUpdate = document.querySelector('#btnUpdate');
                        
                   
                        // btn.setAttribute("type", "submit");
                        btnAdd.style.display = "none"
                        btnUpdate.style.display = "inline"
                    }

                handleUpdate=async(e)=>{
                    e.preventDefault()
         
                     let id =  this.state.id 
                    await axios.put("http://127.0.0.1:8000/api/task/"+id,this.state)
                    .then(res=>{
                        // alert('Data has been updated')
                        window.location.reload()
                    }
                        )
                }
                        

    handleDelete= async(id)=>{
        // console.log(id)
        await axios.delete("http://127.0.0.1:8000/api/task/"+id)
                 .then(res=>{
            window.location.reload()
                  }
        )} 

    render() {
        return (
            <div>
                <form>
                        <input value={this.state.taskName} onChange={this.handleChange} />
                        <button id='btnAdd' onClick={this.handleClick}>Click</button>
                        <button className="btn btn-warning" style={{display:'none'}} id="btnUpdate" onClick={this.handleUpdate}>Update</button>
                        <h2>{this.state.showNom}</h2>
                        </form>
                 <table className="table"    >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((value)=>(
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td><button className='btn btn-outline-danger' onClick={()=> this.handleDelete(value.id)}> Delete </button>
                                <button className='btn btn-outline-success ms-3' onClick={()=> this.handleEdit(value.id)}> edit </button></td>
                                </tr>
                               ))}
                            </tbody>
                    </table>
            </div>
        );
    }
}