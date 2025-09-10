import { Home } from './Pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/theme.css';
import './styles/global.css';

export function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}