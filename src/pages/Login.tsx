import { useState } from "react";
import {login, logout} from "../store";
import {useDispatch , useSelector} from "react-redux";

export const Login =() =>{
    const [newUserName,setNewUserName] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state:any)=>state.user.value.username)
    return (
        <div>
            {username}
            <input onChange={(e)=>{
                setNewUserName(e.target.value)
            }}/>
            <button onClick={() => dispatch(login({username: newUserName}))}>Submit</button>
            <button  onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )

}