import * as React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import Item from "../components/item";

let documentBody: RenderResult;
describe('<Item />', () => {
    beforeEach(() => {
        documentBody = render(<Item
            checkboxHandle={()=>{}}
            checked
            create_date='created at 11.01.2001 14:14:14'
            id={110}
            title='test-item'
        />);
    });

    it('shows component', () => {
        expect(documentBody.getByText('test-item')).toBeInTheDocument();
        expect(documentBody.getByText('created at 11.01.2001 14:14:14')).toBeInTheDocument();
    });
});
