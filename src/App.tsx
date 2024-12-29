import { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import PageContainer from './pages/PageContainer';



function App () {
  const [activePage, updateActivePage] = useState('identity')


  return <div id="app_container">
    <Navigation activeTab={activePage} onSelectTab={updateActivePage} />
    <PageContainer />
    </div>

}

export default App