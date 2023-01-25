import './App.css';
import HomeScreen from './views/screens/home/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import { Provider } from 'react-redux';
import { store } from './config/store';
import AbountScreen from './views/screens/about/AbountScreen';

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AbountScreen />} />
        </Routes>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
