import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch";



const App = () =>{
    return(
        <div>
           {/* <GuestList/> */}
           <UserSearch/>
           {/* <EventComponent/> */}
           
        </div>
    )
}

ReactDOM.render(
    <App/>,document.querySelector('#root')
)