import React, { Component } from 'react';
import axios from 'axios';

export class Task extends Component {

    state={
        taskName:"",
        data:[]
    }
    // async componentDidMount(){
    //    await axios.get("http://127.0.0.1:8000/api/task")
    //     .then(response=>{
    //         this.setState({
    //             data:response.data
    //         })
    //     })
    // }


    async componentDidMount(){
        await axios.get("http://127.0.0.1:8000/api/task")  
        .then(res=>
          // console.log(res.data)
          this.setState({
              data:res.data
          })
              )
      }


    handleChange=(e)=>{
            console.log(e.target.value)
        this.setState({
            taskName:e.target.value
        })
    }

    handleClick=(click)=>{
         click.preventDefault()
        axios.post("http://127.0.0.1:8000/api/store",this.state)
          .then(
            window.location.reload()
          
          )
    }

    // await axios.delete("http://127.0.0.1:8000/api/task/"+id)
    // .then(res=>{
    //     alert('Data has been delete')
    //     window.location.reload()
    // }

    handleDelete= async(id)=>{
        
        console.log(id)
        await axios.delete("http://127.0.0.1:8000/api/destroy/"+id)
                 .then(res=>{
            window.location.reload()
                  }
        )

      } 

    render() {
        return (
            <div>
                <form>
                        <input onChange={this.handleChange} />
                        <button onClick={this.handleClick}>Click</button>
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
                                <td><button className='' onClick={()=> this.handleDelete(value.id)}> Delete </button></td>
                                </tr>
                               ))}
                            </tbody>
                    </table>
            </div>
        );
    }
}