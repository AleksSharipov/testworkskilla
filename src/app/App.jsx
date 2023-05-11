import { Balance } from '../components/Balance/Balance';
import { Calls } from '../components/Calls';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { Filters } from '../components/Filters';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/header';
import './styles/index.scss';

function App() {
  
  return (
    <div className="app">
      <div className="wrapper">
        <Sidebar />
        <div className="content-page">
          <Header />
          <div className="subheader">
            <Balance />
            <DatePicker />
          </div>
          <div className="filters">
            <Filters />
          </div>
          <div className="content">
            <Calls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
