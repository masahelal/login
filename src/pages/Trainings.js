import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";

function Trainings() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 5,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 6,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 7,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 8,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "Masa",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "Nour",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Khaled",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "Aya",
      email: "helalmasa5@gmail.com",
      age: "20",
    },
  ];
  const [records, setRecordrs] = useState(data);
  function handlefilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecordrs(newData);
  }
  const conditionalRowStyles = [
    {
      when: (row) => true,
      style: {
        cursor: "pointer",
        transition: "background-color 0.15s ease-in-out",
      },
    },
    {
      when: (row) => true,
      style: {
        "&:hover": {
          backgroundColor: "blue", // لون أزرق فاتح Tailwind: blue-100
        },
      },
    },
  ];
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="filter">
        <input type="text" onChange={handlefilter} />
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        highlightOnHover
        className="shadow-lg rounded-lg overflow-hidden"
      />
    </div>
  );
}

export default Trainings;
