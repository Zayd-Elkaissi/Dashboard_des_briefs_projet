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
      <th scope="col">Name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {this.props.data.map((val) =>(
    <tr key={val.id}>
      <td>{val.name}</td>
      <td>
        <button onClick={()=> this.props.remove(val.id)}>Delete</button>
        <button onClick={()=> this.props.edit(val.id)}>Edit</button>
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