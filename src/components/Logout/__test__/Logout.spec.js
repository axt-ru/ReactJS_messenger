import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logout } from '../index';

describe('Logout test', () => {
    it("calls onClick (handleClick) when click", () => {
        const handleClick = jest.fn();
        render(<Logout onClick={handleClick}>{() => <button>Выйти</button>}</Logout>);
    
        const clickable = screen.getByText("Выйти");
        clickable.click();
    
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
