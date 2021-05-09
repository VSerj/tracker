import AddTracker from './components/AddTracker/AddTracker';
import TrackerList from './components/TrackerLIst/TrackerList';

const App = () => {
  return (
    <>
      <h1 className="title">tracker</h1>
      <AddTracker />
      <TrackerList />
    </>
  );
};

export default App;
