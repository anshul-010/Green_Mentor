import axios from "axios"

export const getNotes = (token) => (dispatch) => {
    dispatch({ type: "NOTE_REQUEST" });

    axios.get('http://localhost:8080/note', {
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
    axios.post('http://localhost:8080/note/create', data, {
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
    axios.post(`http://localhost:8080/note/delete/${id}`,"", {
        headers: {
            'Authorization': token 
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
};