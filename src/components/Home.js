import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
// for React 16.4.x use: import { ReactTabulator } - example in github repo.
import { ReactTabulator } from "react-tabulator"; // for React 15.x

const editableColumns = [
  {
    title: "Status",
    field: "field",
    editor: "input"
  },
  {
    title: "Designed",
    field: "designed",
    align: "center",
    formatter: "tickCross",
    editor: true
  },
  {
    title: "Tested",
    field: "tested",
    align: "center",
    formatter: "tickCross",
    editor: true
  },
  {
    title: "Manufactured",
    field: "manufactured",
    align: "center",
    formatter: "tickCross",
    editor: true
  },
  {
    title: "Shipped",
    field: "shipped",
    align: "center",
    formatter: "tickCross",
    editor: true
  },
  {
    title: "Available",
    field: "available",
    align: "center",
    formatter: "tickCross",
    editor: true
  }
];

const data = [
  {
    field: "Closed",
    designed: "true",
    tested: true,
    manufactured: true,
    shipped: true,
    available: true
  },
  {
    field: "Booked",
    designed: "false",
    tested: true,
    manufactured: true,
    shipped: true,
    available: true
  },
  {
    field: "Purchased",
    designed: "false",
    tested: false,
    manufactured: true,
    shipped: true,
    available: true
  },
  {
    field: "Pending",
    designed: "false",
    tested: false,
    manufactured: true,
    shipped: true,
    available: true
  }
];

class Home extends React.Component {
  state = {
    data: [],
    selectedName: ""
  };
  ref = null;

  setData = () => {
    alert("Reg Form Submitted\n" + JSON.stringify(data));
  };

  cellClick = (cell) => {
    console.log("CellClick called"); // this is the Tabulator table instance
    console.log("cell Click id: ", cell);
    if (cell._cell.value === !cell._cell.oldValue)
      alert(
        "{" +
          cell._cell.column.field +
          ": {" +
          cell._cell.row.data.field +
          ":" +
          cell._cell.value +
          " } } "
      );
  };

  render() {
    return (
      <div styles={{ paddingLeft: "16px" }}>
        <h3>Mapping Table</h3>
        <ReactTabulator
          columns={editableColumns}
          data={data}
          cellEdited={this.cellClick}
        />
        <Button onClick={this.setData} variant="contained" color="primary">
          Submit
        </Button>{" "}
      </div>
    );
  }
}

export default Home;
