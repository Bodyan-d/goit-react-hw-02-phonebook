import React from 'react';

export default function ContactList({ contacts, filter }) {
  function filterItems() {
    let result = contacts.reduce((result, contact) => {
      if (contact.name.toLowerCase().search(filter.toLowerCase())) {
        result.push(contact);
      }

      return result;
    }, []);
    console.log(result);
  }

  setInterval(filterItems, 1000);

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
