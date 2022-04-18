import ReactDOM from "react-dom";
import EventComponent from './event/EventComponent'


const App = () =>{
    return(
        <div>
           {/* <GuestList/> */}
           {/* <UserSearch/> */}
           <EventComponent/>
        </div>
    )
}

ReactDOM.render(
    <App/>,document.querySelector('#root')
)