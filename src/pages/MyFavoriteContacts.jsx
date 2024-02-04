import { UseSelector, useSelector } from "react-redux";

const MyFavoriteContacts = () => {

    const favoriteContacts = useSelector(store => {
        return store.contacts.filter(({ favorite }) => favorite);
    });

    const elements = favoriteContacts.map(({ id, name, contact }) => <li key={id}>Name:{name}. Contact:{contact }</li>)
    return (
        <>
            <h1>My favorite contacts</h1>
            <ul>{elements}</ul>
        </>    
    )
}

export default MyFavoriteContacts;