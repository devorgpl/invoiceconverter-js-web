/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { fireEvent, render, cleanup } from '@testing-library/react';
import type { Contact } from '../../services/ContactsService';
import ContactForm from './ContactForm';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

// testing a controlled component form.
it('Inputing text updates the state', () => {
  const contact: Contact = {
 city: 'City', companyName: 'Company Name', postalCode: '1111', street: 'Str', vatNumber: '123',
};
  const submit = () => {};

  const rend = render(<ContactForm contact={contact} onSubmit={submit} onCancel={submit} />);
});
