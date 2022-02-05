import './App.css';
import MainApp from './Components/MainApp';
import Sidebar from './Components/Sidebar';
import Line from './Components/Line';

function App() {
  return (
    <div className='wrapper'>
     
     <Line/>
     <Sidebar/>
     <MainApp/>
     
    </div>
  );
}

export default App;
