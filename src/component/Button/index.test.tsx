import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('test', () => {
    test('Button test', () => {
        const event = {
            onClick: jest.fn()
        }
        
        const { getByText } = render(<Button {...event}>gavin</Button>);
        const ele = getByText('gavin')
        expect(ele).toBeTruthy()
        expect(ele).toHaveClass('btn')
        userEvent.click(ele)
        // expect(event.onClick).toHaveBeenCalled()
    });
})