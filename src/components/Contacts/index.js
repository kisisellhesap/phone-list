import { useState } from "react";

import Form from "./List";
import List from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([]);



    return (
        <div>
            <h1>Contacts</h1>
            <List />
            <Form addContact={(form) => setContacts([...contacts, form])} />
        </div>
    );
}


export default Contacts;