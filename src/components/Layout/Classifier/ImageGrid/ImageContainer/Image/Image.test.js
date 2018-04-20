import React from 'react';
import Image from './Image';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const OriginalImage = Image.DecoratedComponent;

    const identity = el => el;

    const tree = renderer
        .create(<OriginalImage connectDragSource={identity} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
