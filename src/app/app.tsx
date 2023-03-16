// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Route, Routes } from 'react-router-dom';

import Test from './test/test';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
