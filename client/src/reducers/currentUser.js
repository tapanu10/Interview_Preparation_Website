const currentUserReducer=(state=null,action)=>{
       
    switch(action.type)
    {
        case 'FETCH_CURRENT_USER':
            // console.log('At 6',action.payload);
            return action.payload;
            default:
                return state;
    }
}
export default currentUserReducer