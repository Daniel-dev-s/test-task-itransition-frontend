import React from "react";
import {render, fireEvent, RenderResult, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Container from "../components/component";

let documentBody: RenderResult;

describe("<Container />", () => {
    beforeEach(() => {
        documentBody = render(<Container />);
    });
    it('add new task test', () => {
        const input = screen.getByTestId("test-text-input").querySelector("input[type='text']");
        const button = screen.getByText('Add');
        fireEvent.change(input, { target:{ value: 'hello' }});
        fireEvent.click(button);
        fireEvent.change(input, { target:{ value: '' }});
        expect(screen.getByText('hello')).toBeInTheDocument();
    });
    it('test item list, test edit button', () => {
        //we add one task in list, now test edit it
        let button_edit = screen.getByText("Edit");
        fireEvent.click(button_edit);
        //test edit button
        let button_save = screen.getByText("Save");
        expect(button_save).toBeInTheDocument();
        //now there must be save button
        let editInput = screen.getByDisplayValue('hello');
        expect(editInput).toBeInTheDocument();
        // and edit input
        fireEvent.change(editInput,{target:{value:'goodbye'}});
        //try change task and save it
        fireEvent.click(button_save);
        //check existance of edited element
        expect(screen.getByText('goodbye')).toBeInTheDocument();
    });
    it(' test remove button', () => {
        //get remove button
        let button_remove = screen.getByText("remove");
        fireEvent.click(button_remove);
        //test remove button
        expect(screen.queryByText('goodbye')).toBeNull();
    })
});
