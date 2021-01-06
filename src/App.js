import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import people from './people.js'
import { Container, Row } from 'reactstrap';

const App = () => {

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name',
      filterable: true
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      filterable: true
    },
    {
      Header: 'Email',
      accessor: 'email',
      sortable: false
    },
    {
      Header: 'Title',
      accessor: 'title',
      filterable: true
    },
  ]
  return (
    <Container 
    >
      <Row>
        <h1 style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2em", marginBottom: "1em"}}>Employee Directory</h1>
      </Row>
      <ReactTable
        data={people}
        columns={columns}
        defaultPageSize = {10} 
        className={'-striped'}
        style={{
          backgroundColor: 'white'
        }}
        />
    </Container>
  );
}

export default App;
