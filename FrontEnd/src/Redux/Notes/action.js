import axios from "axios"

export const getNotes = (token) => (dispatch) => {
    dispatch({ type: "NOTE_REQUEST" });

    axios.get('https://green-mentor-3c3f.onrender.com/note', {
        headers: {
            'Authorization': token
        }
    })
    .then((res) => {
        dispatch({type:"NOTE_SUCCESS",payload:res.data.data})
    })
    .catch((error) => {
        console.error('Error fetching notes:', error);
    });
};

export const addNote = (data, token) => (dispatch) => {
    dispatch({type:"ADD_NOTE_REQUEST"})
    axios.post('https://green-mentor-3c3f.onrender.com/note/create', data, {
        headers: {
            'Authorization': token 
        }
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error('Error adding note:', error);
        
    });

};


export const deleteNote = (id,token) =>{
    axios.post(`https://green-mentor-3c3f.onrender.com/note/delete/${id}`,"", {
        headers: {
            'Authorization': token 
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
};