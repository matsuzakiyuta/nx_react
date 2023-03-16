import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
