import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

////////////////////////////////////
/////// BASIC - SEARCH (For a single key)
///////////////////////////////////

/*
import { Users } from "../users";
const Search = () => {
  const [query, setQuery] = useState("");

  const searchTermChangeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={searchTermChangeHandler}
      />
      <Table
        data={Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        )}
      />
    </>
  );
};

export default Search;
*/

////////////////////////////////////
/////// BASIC - SEARCH (For a multiple keys)
///////////////////////////////////
/*
import { Users } from "../users";

function Search() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const filterData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const searchTermChangeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={searchTermChangeHandler}
      />
      {<Table data={filterData(Users)} />}
    </div>
  );
}

export default Search;
*/

////////////////////////////////////
/////// API-SEARCH (From server)
///////////////////////////////////

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8000?query=${query}`);

      setData(result.data);
    };

    if (query.length === 0 || query.length > 2) {
      fetchData();
    }
  }, [query]);

  const searchTermChangeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={searchTermChangeHandler}
      />
      {<Table data={data} />}
    </div>
  );
}

export default Search;
