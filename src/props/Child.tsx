interface ChildProps{
    color: string;
    onClick: ()=> void;
    

}
//Props
export const Child = ({color, onClick}: ChildProps)=>{
    return <div>
        {color}
      
        <button onClick={onClick}>Click me</button>
        </div>
}

//function
export const ChildAsFC: React.FunctionComponent<ChildProps> = ({color}) =>{
    return <div>{color}</div>
}

