import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodItem from './FoodItem';

describe('FoodItem Component', () => {
  test('renders FoodItem with correct data', () => {
    const item = {
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      price: 9.99,
    };

    const { getByText } = render(<FoodItem item={item} />);

    expect(getByText('Pizza')).toBeInTheDocument();
    expect(getByText('Delicious cheese pizza')).toBeInTheDocument();
    expect(getByText('$9.99')).toBeInTheDocument();
  });
});