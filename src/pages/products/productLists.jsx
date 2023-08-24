import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Divider, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AddProduct from "./AddProduct";
import { useAppStore } from "../../appStore";
import EditForm from "./EditProduct";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [rows, setRows] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

  const eveCollectionRef = collection(db, "events");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(eveCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };
  console.log(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRows(+event.target.value);
    setPage(0);
  };

  // delete function
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const eventDoc = doc(db, "events", id);
    await deleteDoc(eventDoc);
    Swal.fire("Deleted!", "Your leauge has been deleted.", "success");
    getUsers();
  };

  // filter data
  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  const editData = (id, input, options) => {
    const data = {
      id: id,
      input: input,
      options: options,
    };
    setFormId(data);
    handleEditOpen();
  };



  return (
    <>
      <div>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct closeEvent={handleClose} />
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
          open={editopen}
          // onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditForm closeEvent={handleEditClose} fid={formid} />
          </Box>
        </Modal>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          Leauge List
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.input || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search Products" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </Stack>
        <Box height={10} />
        {rows?.length > 0 ? (
          <>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Id
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Name
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Active
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Option
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Date
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <Box sx={{ display: "flex", margin: "20px 20px" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            key={row?.id}
                            hover
                            role="checkbox"
                            tabIndex={-1}
                          >
                            <TableCell key={row?.id} align="left">
                              {row?.id?.slice(0, 10)}
                            </TableCell>
                            <TableCell align="left">{row?.input}</TableCell>
                            <TableCell align="left">
                              {row?.check === true ? "On" : "Off"}
                            </TableCell>
                            <TableCell align="left">{row?.options}</TableCell>
                            <TableCell align="left">{row?.date}</TableCell>
                            <TableCell align="left">
                              <Stack spacing={2} direction="row">
                                <EditIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                  className="cursor-pointer"
                                  onClick={() =>
                                    editData(row?.id, row?.input, row?.options)
                                  }
                                />
                                <DeleteIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "darkred",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    deleteUser(row?.id);
                                  }}
                                />
                              </Stack>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <div style={{ textAlign: "center", color: "red", fontSize: "24px" }}>
            No League
          </div>
        )}
      </Paper>
    </>
  );
}
