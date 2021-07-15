import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {};

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      console.log(prevState);

      return {
        contacts: [
          ...prevState.contacts,
          { id: uuidv4(), name: [prevState.name], number: [prevState.number] },
        ],
      };
    });
  };

  handleFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.contacts.reduce((result, contact) => {
      if (!contact.name.toLowerCase().search(this.state.filter.toLowerCase())) {
        result.push(contact);
        console.log(result);
      }
      return result;
    }, []);
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
