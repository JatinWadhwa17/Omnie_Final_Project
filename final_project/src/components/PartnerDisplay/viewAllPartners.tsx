"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { partnerApi } from "@/redux/viewallSlice";
import { RootState } from "@/redux/store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { deleteApi } from "@/redux/deleteSlice";
import { useRouter } from "next/navigation";

interface Brand {
  code: string;
  color: string;
  imagePath: string | null;
  id: number;
  name: string;
}

interface RowData {
  id: number;
  companyname: string;
  stores: number;
  agents: number;
  brands: string;
}

const columns: GridColDef<RowData>[] = [
  {
    field: "companyname",
    headerName: "Name",
    sortable: false,
    width: 220,
  },
  {
    field: "stores",
    headerName: "Stores",
    sortable: false,
    width: 150,
  },
  {
    field: "agents",
    headerName: "Agents",
    type: "string",
    sortable: false,
    width: 150,
  },
  {
    field: "brands",
    headerName: "Brands",
    sortable: false,
    width: 180,
  },
  {
    field: "meetings",
    headerName: "Meetings",
    sortable: false,
    width: 180,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 180,
    renderCell: (params) => params.value,
  },
];

export default function ViewAllPartners() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(partnerApi());
  }, []);

  const response = useSelector((state: RootState) => state.partners.dataarr);
  console.log(response);

  const handleDeletePartner = () => {
    dispatch(deleteApi());
  };

  const handleDetails = (id: number) => {
    router.push(`/routes/${id}`);
  };

  const rows = response.map((item: any, index: number) => ({
    id: index + 1,
    companyname: item.companyName,
    stores: item.storeCount,
    agents: item.agentCount,
    brands: item.brands.map((brand: Brand) => brand.code).join("|"),
    meetings: `BAC ${item.allocatedSlots.bac} | ISV ${item.allocatedSlots.isv}`,
    actions: (
      <div>
        <IconButton
          color="primary"
          aria-label="view"
          onClick={() => handleDetails(item.id)}
        >
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={() => handleDeletePartner()}
        >
          <DeleteForeverIcon />
        </IconButton>
      </div>
    ),
  }));

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
