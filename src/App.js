import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "./store/actions";
import Layout from "./components/Layout";

function App() {
  const subscriptions = useSelector((state) => state.subscriptions);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isSubsLoading);

  useEffect(() => {
    dispatch(actions.getSubsAsync());
  }, []);

  const onRemoveSub = (id) => {
    dispatch(actions.removeSubAsync(id));
  };
  const columns = [
    { field: "name", headerName: "Название", width: 200 },
    { field: "price", headerName: "Цена", width: 200 },
    { field: "day", headerName: "Дата", width: 200 },
    {
      field: "Action",
      headerName: "Действия",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon onClick={() => onRemoveSub(params.row.id)} />}
        />,
        <GridActionsCellItem icon={<ModeEditIcon />} />,
      ],
    },
  ];

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
        <TextField placeholder="Поиск" size="small" />
        <Button startIcon={<AddIcon />} variant="contained">
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
    </Layout>
  );
}

export default App;
