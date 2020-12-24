import * as React from 'react';
import '@testing-library/jest-dom';
import {
  render, RenderResult, screen, fireEvent,
} from '@testing-library/react';
import Item from '../components/item';

let documentBody: RenderResult;

describe('<Item />', () => {
  beforeEach(() => {
    documentBody = render(<Item
      checked={false}
      checkboxHandle={() => { // @ts-ignore
      }}
      create_date="created at 11.01.2001 14:14:14"
      id={0}
      title="test-item"
    />);
  });

  it('shows component', () => {
    expect(documentBody.getByText('test-item')).toBeInTheDocument();
    expect(documentBody.getByText('created at 11.01.2001 14:14:14')).toBeInTheDocument();
  });

  it('checkbox works', async () => {
    const checkbox = screen.getByTestId('test-checkbox').querySelector('input[type="checkbox"]');
    fireEvent.change(checkbox,
      { target: { checked: true } });
    expect(checkbox).toBeChecked();
  });
});
