import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                 <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((value)=>(
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td> <button className='btn btn-outline-danger' onClick={()=>this.props.remove(value.id)}>Delete</button>

                                <button className='btn btn-outline-success ms-3' onClick={()=> this.props.edit(value.id)}>Edit</button>
                                
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