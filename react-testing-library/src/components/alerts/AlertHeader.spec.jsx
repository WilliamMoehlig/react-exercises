import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Alert from './Alert';
import AlertHeader from './AlertHeader';

describe('AlertHeader component', () => {
  test('it renders an AlertHeader within an Alert', () => {
    // Arrange
    const testId = 'alertHeaderId';
    // Act
    const { getByRole } = render(
      <Alert data-testid={testId}>
        <AlertHeader classNames="font-weight-bold">Im a header</AlertHeader>
      </Alert>
    );
    const alertHeader = getByRole('heading');

    // Assert
    expect(alertHeader).toHaveClass(...['alert-heading', 'font-weight-bold']);
    expect(alertHeader).toHaveTextContent('Im a header');
    expect(alertHeader.tagName).toBe('H4');
  });
});
