import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar id={0} name={'action'} title={''} />

      <Content imdbID={''} Title={''} Poster={''} Ratings={[]} Runtime={''} />

    </div>
  )
}