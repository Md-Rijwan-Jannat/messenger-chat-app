
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { configureStore } from '@reduxjs/toolkit';
import { api } from './state/api.js';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js';


export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
