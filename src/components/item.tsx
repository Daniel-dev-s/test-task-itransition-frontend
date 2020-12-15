import React, { Component }  from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

type Props = {
  title?:string
  checked?:boolean
}

export class Item extends Component<unknown, Props> {
  
   constructor(props) {
   	super(props);
  this.state = {
  	checked: false
  }

  }

  changeCheck(){
  	this.setState({
  		checked: true
  	})
  }

  render() {
    return (
    <div>
	    <Checkbox 
	    	onChange={ this.changeCheck }
	        size="small"
	        inputProps={{ 'aria-label': 'checkbox with small size' }}
	      />
	      
	    <span>abcdef</span>
	    		    <Button color="primary">Edit</Button>
    </div>
    )
  }
}