import React from 'react';
//import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('renders without chrashing', () => {
    mount(<App />);
  });
})