import { render } from '@testing-library/react';

import UiLibrary from './uiLibrary';

describe('UiLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
