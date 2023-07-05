import {format} from 'date-fns';
import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "Name",
    disableFilters : true
  },
  {
    Header: "Company",
    accessor: "Company",
 
  },
  {
    Header: "Status",
    accessor: "Status",
  
  },
  {
    Header: "Last Updated",
    accessor: "Last_Updated",
    Cell : ({value})=>{return format(new Date(value), 'd/m/yyyy')},
   
  },
  {
    Header: "Notes",
    accessor: "Notes",
   
  },
  
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
