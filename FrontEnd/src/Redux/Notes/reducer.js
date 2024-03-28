

let initialState = {
    notes:[]
  }

export const reducer =(state=initialState,{type,payload})=>{
    switch (type){
        case "NOTE_REQUEST":{
            return {...state,isLoading:true}
        }
        case "NOTE_SUCCESS":{
            return {...state,isLoading:false,notes:payload}
        }
        default:{
            return state;
        }
    }

}
