import './search-box.styles.css';
export const SearchBox =(props)=>{
    return(
        <input 
        className={this.props.classname}  
        type='search' 
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        />
    );
};