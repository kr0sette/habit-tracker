import Navigation from '@/components/navigation/Navigation';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export interface BaseAppData {
  identityCount: number,
  habitCount: number
}


function App () {
  const baseData: BaseAppData = {
    identityCount: 2,
    habitCount: 0
  }

  return <div id="app_container" style={{height: '100vh'}}>
    <Navigation />
    <Container maxWidth="lg" style={{height: '100%'}}>
      <Outlet context={baseData}/>
    </Container>
    </div>

}

export default App