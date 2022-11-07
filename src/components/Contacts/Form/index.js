import { useState, useEffect } from "react";
const initialValue = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialValue);

    useEffect(() => {
        setForm(initialValue);
    }, [contacts]);


    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        addContact([...contacts, form]);
        console.log(form);

    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullname" value={form.fullname} onChange={onChangeInput} placeholder="fullname"></input>
            </div>
            <div>
                <input name="phone_number" value={form.phone_number} onChange={onChangeInput} placeholder="phone number"></input>
            </div>
            <div>
                <button>
                    Add
                </button>
            </div>

        </form>
    );
}


export default Form;
