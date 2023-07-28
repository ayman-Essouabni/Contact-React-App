import React, { useState } from "react";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

export default function Contacts() {
  const contactsArray = [
    { name: "samadi", phone: 300929290202 },
    { name: "ahmadi", phone: 993939393939 },
    { name: "swabni", phone: 92873737379 },
  ];
  const [contacts, setContacts] = useState(contactsArray);

  const addContacts = (contact) => {
    let updatedContacts = [...contacts]; // we need first to create a copy from the array state
    updatedContacts.push(contact); // we will push the contact that we will recieve in ourarray updatedCotacts(we modified our copy array)
    setContacts(updatedContacts); // we give the modofied copy array to the state using setState
  };

  const deleteContacts = (name) => {
    let oldContacts = [...contacts];
    let updatedContacts = oldContacts.filter((contact) => contact.name != name);
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <AddContact addContacts={addContacts} />
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <div className="card bg-white">
            <table className="table">
              <thead>
                <tr>
                  <th>Nom & Prénom</th>
                  <th>Télephone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    deleteContacts={deleteContacts}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
