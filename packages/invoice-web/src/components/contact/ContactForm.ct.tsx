import React from 'react';
import { mount } from '@cypress/react';
import ContactForm from './ContactForm';
import type { Contact } from '../../services/ContactsService';

it('renders learn react link', () => {
    const contact: Contact = {
 city: 'City', companyName: 'Company Name', postalCode: '1111', street: 'Str', vatNumber: '123',
};
    const submit = () => {};
  mount(<ContactForm contact={contact} onSubmit={submit} onCancel={submit} />);
  cy.get('a').contains('Learn React');
});
