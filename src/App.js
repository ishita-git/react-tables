import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import ColumnOrder from './components/ColumnOrder';

function App() {
  return (
    <div className="App">
      {/* <h1>Basic Table:</h1>
      <BasicTable/>
      <h1>Sorting Table:</h1>
      <SortingTable/>
      <h1>Filtering Table:</h1> */}
      {/* <FilteringTable/> */}
      {/* <h1>Pagination Table:</h1>
      <PaginationTable/>
      <h1>Column Order:</h1>
      <ColumnOrder/>
    <h1>Row Selection:</h1>*/}
     <RowSelection/> 
    </div>
  );
}

export default App;
