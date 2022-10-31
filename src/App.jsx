import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Pages/Home';
import Starred from './Pages/Starred';
import PageNotFound from './Pages/PageNotFound';
import Show from './Pages/Show';

const theme = {
  mainColors: {
    blue: '#AD63EB',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}>
          b
        </Route>

        <Route path="/starred" element={<Starred />}>
          This is the Starred Page
        </Route>

        <Route path="/show/:id" element={<Show />}>
          Show
        </Route>

        <Route path="*" element={<PageNotFound />}>
          This is 404 Page
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
