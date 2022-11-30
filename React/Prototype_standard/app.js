
       class Task extends React.Component{

        state={
            taskName:"",
            data:[]
        }
        componentDidMount(){
             
            axios.get("http://127.0.0.1:8000/api/task")
            .then(response=>{
                this.setState({
                    data:response.data
                })
            })
        }

        handleChange=(e)=>{
            
            this.setState({
                taskName:e.target.value
            })
        }

        handleClick=(click)=>{
             click.preventDefault()
            axios.post("http://127.0.0.1:8000/api/store",this.state)
              .then(
                window.location.reload(false)
              )
        }

             handleDelete= (id)=>{
        
        console.log(id)
                 axios.delete("http://127.0.0.1:8000/api/destroy/"+id)
                 .then(
            window.location.reload(false)
        )

      }      



        render(){
            return(
                <div>
                    <form>
                        <input onChange={this.handleChange} ></input>
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
                                <td><button onClick={()=> this.handleDelete(value.id)}> Delete </button></td>
                                </tr>
                               ))}
                            </tbody>
                    </table>
                </div>
            )
        }
    }