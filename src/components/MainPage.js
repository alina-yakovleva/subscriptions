import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";

import DeleteIcon from "@mui/icons-material/Delete";

import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { Button, Box, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import Layout from "./Layout";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";

import * as actions from "../store/actions";
import SearchField from "./SearchFirld";

const MainPage = () => {
  const subscriptions = useSelector((state) => state.subscriptions);
  const loading = useSelector((state) => state.isSubsLoading);
  const [editSub, setEditSub] = useState(null);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onRemoveSub = (id) => {
    dispatch(actions.removeSubAsync(id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEditDialog = () => {
    setEditSub(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const columns = [
    { field: "name", headerName: "Название", width: 200 },
    { field: "price", headerName: "Стоимость", width: 200 },
    { field: "day", headerName: "День оплаты", width: 200 },
    {
      field: "Action",
      headerName: "Действия",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => onRemoveSub(params.row.id)}
          icon={<DeleteIcon />}
        />,
        <GridActionsCellItem
          onClick={() => setEditSub(params.row)}
          icon={<ModeEditIcon />}
        />,
      ],
    },
  ];
  const onAddSub = (sub) => {
    dispatch(actions.addSubAsync(sub));
  };

  const onEditSub = (id, data) => {
    dispatch(actions.editSubAsync(id, data));
  };

  return (
    <Layout>
      <Typography variant="h4">Подписки</Typography>
      <Box
        pt={3}
        pb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <SearchField />

        <Button
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Добавить
        </Button>
      </Box>
      <Box height={500}>
        <DataGrid
          sx={{
            ".MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within":
              {
                outline: 0,
              },
          }}
          rows={subscriptions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableColumnMenu
          loading={loading}
        />
      </Box>
      <AddDialog open={open} onSubmit={onAddSub} onClose={handleClose} />
      <EditDialog
        open={Boolean(editSub)}
        data={editSub}
        onClose={handleCloseEditDialog}
        onSubmit={onEditSub}
      />
    </Layout>
  );
};

export default MainPage;
