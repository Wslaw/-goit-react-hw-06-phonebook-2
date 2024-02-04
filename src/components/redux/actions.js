import { nanoid } from "nanoid"
import { ADD_CONTACTS} from "./constants"
import { DELETE_CONTACTS } from "./constants"

const addContacts = (payload) => {
    return {
               type: ADD_CONTACTS,
        payload:{
        id: nanoid(),
             ...payload,
        },
    }
}
export default addContacts;

export const deleteContacts = (payload) => {
    return {
        type: DELETE_CONTACTS,
        payload,
    };
}