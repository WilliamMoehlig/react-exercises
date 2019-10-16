import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import UserCounterBadge from './UserCounterBadge';

describe('component UserCounterBadge', () => {
  test('it should render as badge content', async () => {
    // Act
    const { getByRole } = render(<UserCounterBadge>4</UserCounterBadge>);

    const span = getByRole('note');
    // Assert
    expect(span).toHaveTextContent(4);
  });
});
