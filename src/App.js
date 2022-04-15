import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import Layout from "./components/Layout";

function App() {
  const rows = [
    {
      id: 1,
      Name: "Netflix",
      Price: 2500,
      Date: 23,
    },
    {
      id: 2,
      Name: "Youtube Premium",
      Price: 3000,
      Date: 12,
    },
    { id: 3, Name: "Figma", Price: 1000, Date: 12 },
    { id: 4, Name: "Skyeng", Price: 7000, Date: 11 },
    { id: 5, Name: "Patreon", Price: 1200, Date: 10 },
  ];

  const columns = [
    { field: "Name", headerName: "Название", width: 200 },
    { field: "Price", headerName: "Цена", width: 200 },
    { field: "Date", headerName: "Дата", width: 200 },
    {
      field: "Action",
      headerName: "Действия",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem icon={<DeleteIcon />} />,
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
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </Layout>
  );
}

export default App;
