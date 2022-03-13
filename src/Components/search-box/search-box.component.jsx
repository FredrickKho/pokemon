import './search-box.styles.css';
export const SearchBox =(props)=>{
    return(
        <input 
        className={props.classname}  
        type='search' 
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        />
    );
};