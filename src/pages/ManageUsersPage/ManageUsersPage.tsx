import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ManageUserCard from "../../components/manageUser/ManageUserCard";

const ManageUsersPage = (props: any) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/unapproved")
      .then((result: any) => {
        if (result.data) {
          setUsers(result.data);
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  });

  const handleApprove = (id: any) => {
    axios
      .put("http://localhost:5000/users/approve", {
        _id: id,
        approvalStatus: true,
      })
      .then((result: any) => {
        if (result.data) {
          setUsers(result.data);
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const removeUser = (id: any) => {
    axios
      .delete("http://localhost:5000/users", {
        data: { _id: id },
      })
      .then((result: any) => {
        if (result.data) {
          setUsers(result.data);
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {users.map((user: any) => {
          return (
            <ManageUserCard
              {...user}
              handleApprove={handleApprove}
              removeUser={removeUser}
              key={user._id}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default ManageUsersPage;
