const initialData = {
    list : []
}

const CsmReducers = (state = initialData, action) => {
    switch(action.type){
        case "ADD_OPTION": 

        const {id , data} = action.payload;

        return{
            ...state,
            list:[
                ...state.list, 
                {
                    data:data,
                    id:id

                 }
             ]
        }
        case "DELETE_LIST_ITEM": 

       const newList=  state.list.filter((elem)=> elem.id != action.id)

        return{
            ...state,
            list: newList
        }
       
        default: return state;
    }
}

