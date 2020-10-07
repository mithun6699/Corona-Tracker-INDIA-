import React from "react";
import { Table } from "react-bootstrap";

export default function DataTable(props) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
          </tr>
        </thead>

        {props.data.slice(1).map((item) => (
          <tbody>
            <tr key={item.date}>
              <th>{item.state}</th>
              <th>{item.confirmed}</th>
              <th style={{ color: "green" }}>{item.active}</th>
              <th style={{ color: "red" }}>{item.deaths}</th>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
