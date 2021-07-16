import React from 'react';

export default function ContactList({ contacts, filter }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li
            key={contact.id}
            className=""
          >{`${contact.name}: ${contact.number}`}</li>
        );
      })}
    </ul>
  );
}
