import React from "react";

export default function ContactItem({
  contact: { name, phone },
  deleteContacts,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <span
          style={{ cursor: "pointer" }}
          className="badge badge-danger font-weight-bold p-2"
          onClick={() => deleteContacts(name)}
        >
          &times;
        </span>
      </td>
    </tr>
  );
}
