import { ThemeContextProvider } from './components/ThemeContext';
import { Box } from './components/Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
