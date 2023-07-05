import React, { useCallback, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import Select from "react-select";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import Checkbox from "./Checkbox";
import Modal from "./Modal";

const RowSelection = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [tableData, setTableData] = useState(data);
  const [onClick, setOnClick] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    selectedFlatRows,
    prepareRow,
  } = tableInstance;

  const firstPageRows = rows.slice(0, 10);

  const companyOptions = [
    { label: "Zazio", value: "Zazio" },
    { label: "Gabvine", value: "Gabvine" },
    { label: "Gabtype", value: "Gabtype" },
    { label: "Flipbug", value: "Flipbug" },
    { label: "Mynte", value: "Mynte" },
  ];

  const options = [
    { value: "Active", label: "Active" },
    { value: "Closed", label: "Closed" },
  ];

  const handleAddMembers = () => {
    setOnClick(true);
  };

  const filterRows = (selectedOption, selectId) => {
    if (selectId === "select1") {
      const filtered = rows.filter(
        (row) => row.original.Company === selectedOption.value
      );
      setFilteredRows(filtered);
    }

    if (selectId === "select2") {
      const filtered = rows.filter(
        (row) => row.original.Status === selectedOption.value
      );
      setFilteredRows(filtered);
    }
  };

  const deleteRow = useCallback((row) => {
    console.log(row);
    const updatedRows = tableData.filter((dataRow) => dataRow !== row.original);
    setTableData(updatedRows);
    setFilteredRows(filteredRows.filter((filteredRow) => filteredRow !== row.original));
  },[tableData]);

  const handleOnChange = (selectedOption, selectId) => {
    if (selectId === "select1") {
      setSelectedOption(selectedOption);
      filterRows(selectedOption, selectId);
    }

    if (selectId === "select2") {
      setSelectedOption(selectedOption);
      filterRows(selectedOption, selectId);
    }
  };

  const CheckboxOption = ({ children, isSelected, innerProps }) => (
    <div {...innerProps} className="checkbox-filter">
      <input type="checkbox" checked={isSelected} readOnly />
      <label>{children}</label>
    </div>
  );

  return (
    <>
      <div className="heading-container">
        <div className="heading">Team Members</div>
        <button className="add-button" onClick={handleAddMembers}>
          Add Members +
        </button>
      </div>

      <div className="filter-dropdown">
        <Select
          placeholder="Company"
          options={companyOptions}
          value={selectedOption}
          onChange={(selectedOption) =>
            handleOnChange(selectedOption, "select1")
          }
          closeMenuOnSelect={false}
          components={{ Option: CheckboxOption }}
          isMulti
        />

        <Select
          options={options}
          value={selectedOption}
          onChange={(selectedOption) =>
            handleOnChange(selectedOption, "select2")
          }
          placeholder="Status"
        />
      </div>

      <br />
      {onClick && <Modal onClick={onClick} setOnClick={setOnClick} />}

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {filteredRows.length > 0
            ? filteredRows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                    <td>
                      <button onClick={() => deleteRow(row)}>delete</button>
                    </td>
                  </tr>
                );
              })
            : firstPageRows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                    <td>
                      <button onClick={() => deleteRow(row)}>delete</button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default RowSelection;