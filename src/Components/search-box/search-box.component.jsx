import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component{
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
}
export default SearchBox;
