
import { ADD_CONTACTS, DELETE_CONTACTS } from "./constants";

const initialState = {
  contacts: [],
};

// const reducer = (state = initialState, action) => {
const reducer = (state = initialState, {type, payload}) => {
  
//   switch (action.type) {
  switch (type) {
    case ADD_CONTACTS:
          const { contacts } = state;
        //   return contacts:[...contacts,action.payload]
          return {contacts:[...contacts, payload]}
        // break;
      case DELETE_CONTACTS:
          const newContacts = state.contacts.filter(item => item.id !== payload);
          return {contacts:newContacts,}
      
    default:
        return state;
  }
  
  
};

export default reducer;