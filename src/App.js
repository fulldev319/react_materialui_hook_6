import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PplCard from "./PplCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log("Fetching warning!!!", err))
      );
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={user.id}>
            <PplCard user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
