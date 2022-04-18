
const EventComponent:React.FC = () => {
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event);
  }
  const onDragStart = (event:React.DragEvent<HTMLDivElement> )=>{
    console.log(event);
  }
  return (
    <div>
        <input onChange={handleOnchange}/>
        <div draggable onDragStart={onDragStart}>Di chuyển</div>
    </div>
  )
}

export default EventComponent