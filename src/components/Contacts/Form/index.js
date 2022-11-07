import { useState } from "react";

function Form({ addContact }) {

    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        addContact([form]);
        console.log(form);
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullname" onChange={onChangeInput} placeholder="fullname"></input>
            </div>
            <div>
                <input name="phone_number" onChange={onChangeInput} placeholder="phone number"></input>
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
