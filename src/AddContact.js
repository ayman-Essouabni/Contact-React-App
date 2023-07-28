import React, { useState } from "react";

export default function AddContact(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const contact = {
      name: name,
      phone: phone,
    };
    console.log(contact);
    props.addContacts(contact);
  };
  return (
    <div className="row my-5">
      <div className="col-md-6 mx-auto card bg-white">
        <form
          method="post "
          onSubmit={(event) => submitForm(event)}
          className="p-2"
        >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Nom & Prénom"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              autoComplete="off"
              name="phone"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              placeholder="Télephone"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Valider" />
          </div>
        </form>
      </div>
    </div>
  );
}
