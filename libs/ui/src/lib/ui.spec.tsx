import { render } from '@testing-library/react';

import OneFootAtPortfolioUi from './ui';

describe('OneFootAtPortfolioUi', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<OneFootAtPortfolioUi />);
    expect(baseElement).toBeTruthy();
  });
  
});
