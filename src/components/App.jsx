import { Component } from 'react';
import { Section } from './Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <>
        <Section headTitle="Phonebook"></Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}
