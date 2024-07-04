import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

describe('Register Component', () => {
  test('renders Register form', () => {
    const { getByPlaceholderText, getByText } = render(<Register onRegister={() => {}} />);
    
    expect(getByPlaceholderText('fullname')).toBeInTheDocument();
    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
  });

  test('handles input change', () => {
    const { getByPlaceholderText } = render(<Register onRegister={() => {}} />);
    const usernameInput = getByPlaceholderText('fullname');
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(usernameInput.value).toBe('testuser');
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });

  test('calls onRegister with userDetails on submit', () => {
    const onRegisterMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Register onRegister={onRegisterMock} />);

    const usernameInput = getByPlaceholderText('fullname');
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(registerButton);

    expect(onRegisterMock).toHaveBeenCalledWith({ username: 'testuser', email: 'test@example.com', password: 'password' });
  });
});