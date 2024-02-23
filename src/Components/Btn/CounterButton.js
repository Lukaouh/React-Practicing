

export default function Counter(props){


 return(
     <>
        <button onClick={()=>{
        props.setCount(props.count + 1)
        }}>clicked {props.count} times</button>
     </>   
    ) 
}

