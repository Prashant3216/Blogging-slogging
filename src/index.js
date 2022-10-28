import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import { store } from "./store/store"
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./theme/theme.config"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store={store}>
  <ChakraProvider theme={customTheme}>
    <App />
    </ChakraProvider>
  </Provider>

  </React.StrictMode>
);