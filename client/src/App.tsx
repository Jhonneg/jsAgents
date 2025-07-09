import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateRoom from './pages/CreateRoom';
import Room from './pages/Room';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="room/:id" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
