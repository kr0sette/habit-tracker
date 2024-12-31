import Navigation from '@/components/navigation/Navigation';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';



function App () {
  return <div id="app_container">
    <Navigation />
    <Container maxWidth="lg">
      <Outlet />
    </Container>
    </div>

}

export default App