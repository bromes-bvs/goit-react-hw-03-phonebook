import { Component } from 'react';
import { nanoid } from 'nanoid';
import initial from '../data.json';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Wrapper from './Wrapper/Wrapper.styled';

export class App extends Component {
  state = {
    contacts: initial,
    filter: '',
  };

  handelSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const findeName = contacts.some(contact =>
      contact.name.toLowerCase().includes(newName.toLowerCase())
    );
    const findeNumber = contacts.some(contact =>
      contact.number.trim().includes(newNumber.trim())
    );

    const newContact = [
      {
        id: nanoid(),
        name: newName,
        number: newNumber,
      },
    ];

    if (!findeName && !findeNumber) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, ...newContact],
      }));
      e.target.reset();
    } else {
      alert(`${newName} is already in contacts`);
    }
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  daleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmiting={this.handelSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        {visibleContacts.length !== 0 && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.daleteContact}
          />
        )}
      </Wrapper>
    );
  }
}
