import { Component } from "react";
import './search-box.styles.css'


export const SearchBox = props=>(
    render(){
        return(
          <input 
            className={this.props.classname}  
            type='search' 
            placeholder={this.props.placeholder}
            onChange={this.props.OnChangeHandler}
          />
        )
    }
)

