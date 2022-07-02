import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";

function Users() {

  const columns = useMemo(
    () => [
      
      {
        Header: "Patron ID",
        accessor: "pid"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Designation",
        accessor: "designation"
      },
      {
        Header: "Phone Number",
        accessor: "phoneno"
      }
    ],
    []
  );
  
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/users");
      setData(result.data.users);
    console.log(result.data.users);
    })();
  }, []);

  return (
    <div className='container'>

      <Table columns={columns} data={data} />
    </div>
  )
}
export default Users;