import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../components/component';

describe('<Container />', () => {
  beforeEach(() => {
    render(<Container />);
  });
  it('add new task test', () => {
    const input = screen.getByTestId('test-text-input').querySelector("input[type='text']");
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
  it('test item list, test edit button', () => {
    // we add one task in list, now test edit it
    const buttonEdit = screen.getByText('Edit');
    fireEvent.click(buttonEdit);
    // test edit button
    const buttonSave = screen.getByText('Save');
    expect(buttonSave).toBeInTheDocument();
    // now there must be save button
    const editInput = screen.getByDisplayValue('hello');
    expect(editInput).toBeInTheDocument();
    // and edit input
    fireEvent.change(editInput, { target: { value: 'goodbye' } });
    // try change task and save it
    fireEvent.click(buttonSave);
    // check existance of edited element
    expect(screen.getByText('goodbye')).toBeInTheDocument();
  });
  it(' test remove button', () => {
    // get remove button
    const buttonRemove = screen.getByText('remove');
    fireEvent.click(buttonRemove);
    // test remove button
    expect(screen.queryByText('goodbye')).toBeNull();
  });
});
