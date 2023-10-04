import React from 'react';
import { render, screen } from '@testing-library/react';
import Final from './Final';



// For Final Component 
test('Final component should render correctly', () => {
  render(<Final />);

  const finalComponentElement = screen.getByText('Book a Table');

  expect(finalComponentElement).toBeInTheDocument();
});

test('Final component should display the correct booking information', () => {
  const bookingInformation = {
    date: '2023-10-05',
    Occasion: 'Birthday',
    Time: '19:00',
    GuestNumber: 4,
  };

  render(<Final data={bookingInformation} />);

  const dateElement = screen.getByText('2023-10-05');
  const occasionElement = screen.getByText('Birthday');
  const timeElement = screen.getByText('19:00');
  const guestNumberElement = screen.getByText('4');

  expect(dateElement).toBeInTheDocument();
  expect(occasionElement).toBeInTheDocument();
  expect(timeElement).toBeInTheDocument();
  expect(guestNumberElement).toBeInTheDocument();
});

