import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders message to start API if server not started', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Please Activate Server using NPM Run Json-Server/i);
  expect(linkElement).toBeInTheDocument();
});
test('Renders Teacher and Custodial Login if Server is up', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Please Activate Server using NPM Run Json-Server/i);
  expect(linkElement).toBeInTheDocument();
});
//need to import enzyme and use Jest

//writing test to make sure suite works
// describe('addition', ()=>{
//   it('knows that 2 and 2 is 4', ()=>{
//     expect(2 + 2).toBe(4)
//   })
// })

//write test to check against API import

//write test to make sure component is rendered 

//write test to make sure Login component is on page
