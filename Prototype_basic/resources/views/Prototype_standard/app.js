
// axios.get('http://127.0.0.1:8000/api/task').then((response) => console.log(response));

// function Hello() {
//     return( 
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     );
//   }




  function Task(){

    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/task").then((res) => {
        setTasks(res.data);
      });
    });

    return (
        
        <div>{tasks.map(task =>
        <p>{task.name}</p>
        
        )}
        </div>
        );
}





