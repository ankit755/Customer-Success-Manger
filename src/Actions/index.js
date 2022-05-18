export const addOptions = (data) => {
    return { type: "ADD_OPTION",
    payload: {
        id: new Date().setTime.toString(),
        data:data
    }
}
}

export const deleteListItem = (id) => {
    return {
        type: "DELETE_LIST_ITEM",
        id
    }
}