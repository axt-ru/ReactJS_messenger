import { render } from '@testing-library/react';
import { AddChat} from '../AddChat';

describe('AddChat test', () => {
    it('AddChat matches snapshot', () => {
        const addchats = render(<AddChat />);
        
        expect(addchats).toMatchSnapshot();
    });
});