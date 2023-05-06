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
        <Section title="Please leave feedback"></Section>
        <Section title="Statistics"></Section>
      </>
    );
  }
}
