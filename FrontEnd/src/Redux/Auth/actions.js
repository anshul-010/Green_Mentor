import axios from "axios"

export const login = (data,navigate)=> (dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"})
    axios.post(`https://green-mentor-3c3f.onrender.com/user/login`, data)
    .then((res)=>{
        dispatch({type:"LOGIN_SUCCESS",payload:res});
        if(res.data.token){
            return navigate("/")
        }
    })
}