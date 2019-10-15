import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Alert from './Alert';
import AlertButton from './AlertButton';

describe('component AlertButton', () => {
  test('it should render a button within an Alert', () => {
    // Arrange
    /* const variant = 'secondary';
    const size = 'large';
    const type = 'submit'; */

    // Act
    const getByRole = render(
      <Alert>
        <AlertButton>Click me</AlertButton>
      </Alert>
    );
    // Assert
    expect(getByRole).toBe('');
  });
  test('it should be able to set properties', () => {});
  test('it should be able to pass onClick logic', () => {});
});
