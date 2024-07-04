import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Login Component', () => {
  test('renders Login form', () => {
    const { getByPlaceholderText, getByText } = render(<Login onLogin={() => {}} />);
    
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  test('handles input change', () => {
    const { getByPlaceholderText } = render(<Login onLogin={() => {}} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });

  test('calls onLogin with credentials on submit', () => {
    const onLoginMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Login onLogin={onLoginMock} />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    expect(onLoginMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
  });
});