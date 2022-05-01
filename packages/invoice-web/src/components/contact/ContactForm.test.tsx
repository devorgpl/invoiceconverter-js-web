/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import type { Contact } from '../../services/ContactsService';
import {fireEvent, render, cleanup} from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

//testing a controlled component form.
it('Inputing text updates the state', () => {
  let contact: Contact = {city: 'City', companyName: 'Company Name', postalCode: '1111', street: 'Str', vatNumber: '123'};
  let submit = ()=> {}

  const rend = render(<ContactForm contact={ contact } onSubmit={submit} onCancel={submit} />);
  console.log(rend);
})
