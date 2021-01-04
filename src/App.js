import ReactTable from 'react-table-v6'
import './App.css';
import 'react-table-v6/react-table.css'
import people from './people.js'
import { render } from '@testing-library/react';

const App = () => {
  
  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name',
      filterable: true,
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      filterable: true,
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
  ]
  return (
    <ReactTable
    data = {people}
    columns= {columns} />
  );
}

export default App;
