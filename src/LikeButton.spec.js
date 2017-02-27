import React from 'react';
import { shallow } from 'enzyme';
import LikeButton from './LikeButton';

describe('LikeButton', () => {
    it('display the number of likes in the text output', () => {
        const component = shallow(
            <LikeButton
                likes={10}
            />
        )
        expect(component.text()).toEqual('I have 10 likes, but you can click me!')
    });

    it('passes a click Handler to the component', () => {
        const fakeHandler = jest.fn();

        const component = shallow(
            <LikeButton
                likes={10}
                onClick={fakeHandler}
            />
        )
        component.simulate('click');
        expect(fakeHandler).toHaveBeenCalled();
    })

    it('has a grey background color when likes === 0', () => {
        const component = shallow(
            <LikeButton />
        )
        expect(component.prop('style')).toHaveProperty('backgroundColor', '#D3D3D3')
    });

    it('has a blue background color when likes > 0', () => {
        const component = shallow(
            <LikeButton  likes={2} />
        )
        expect(component.prop('style')).toHaveProperty('backgroundColor', '#4169E1')
    })
});
