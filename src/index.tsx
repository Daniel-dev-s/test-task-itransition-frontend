import React from "react";
import ReactDOM from "react-dom";
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Item } from "./components/item"




const handleClick = () => {
 console.log('click');
}

function App() {
  return( 
  <div className="todo-container" >
      <h2>TODO List</h2>

      <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined"  
      size="small"
       />

      <Button 
      variant="outlined" 
      color="primary" 
      onClick = { handleClick }>Add new</Button>
      
      <Item />
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);