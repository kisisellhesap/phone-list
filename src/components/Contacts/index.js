import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([

        {
            fullname: "mehmet",
            phoneNumber: "21345"
        },
        {
            fullname: "ali",
            phoneNumber: "1221345"
        },
        {
            fullname: "almin",
            phoneNumber: "52135545"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


    return (
        <div>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}


export default Contacts;