import { FC, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { CircularProgress, Fade, TableContainer, Paper } from "@mui/material/";

interface Data {
    no: number,
    nama: string,
    npm: string,
    email: string,
    angkatan: number,
    peringkat: number,
    poin: {
        kegiatan_tutor_uts: number,
        workshop_internal: number,
        sharing_alumni_series_1: number,
        pengabdian_1: number,
        sharing_alumni_series_2: number,
        kegiatan_tutor_uas: number,
        total_poin: number;
    };
}

const MaterialTable: FC = () => {
    const [data, setData] = useState<Array<Data>>([]);

    const { } = useQuery(['rewards'], () => {
        const API_HOST: string = import.meta.env.VITE_API_HOST ? import.meta.env.VITE_API_HOST : "";
        fetch(`${API_HOST}/api/v1/himarewards`)
            .then((response) => response.json())
            .then((json) => {
                setData([]);
                json.map((data: Data) => {
                    setData(prev => [...prev, data]);
                });
            });
    }
    );


    const columnsUser = useMemo<MRT_ColumnDef<Data>[]>(
        () => [
            {
                accessorKey: "nama",
                header: "Nama",
                enableGrouping: false,
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "left"
                }
            },
            {
                accessorKey: "npm",
                header: "NPM",
                enableGrouping: false,
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "email",
                header: "Email",
                enableGrouping: false,
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "angkatan",
                header: "Angkatan",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "peringkat",
                header: "Peringkat",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
        ],
        [],
    );

    const columnsPoin = useMemo<MRT_ColumnDef<Data>[]>(
        () => [
            {
                accessorKey: "poin.kegiatan_tutor_uts",
                header: "Kegiatan TUTOR UTS",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.workshop_internal",
                header: "Workshop Internal",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.sharing_alumni_series_1",
                header: "Sharing Alumni Series 1",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.pengabdian_1",
                header: "Pengabdian 1",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.sharing_alumni_series_2",
                header: "Sharing Alumni Series 2",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.kegiatan_tutor_uas",
                header: "Kegiatan TUTOR UAS",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
            {
                accessorKey: "poin.total_poin",
                header: "Total Poin",
                muiTableHeadCellProps: {
                    align: "center"
                },
                muiTableBodyCellProps: {
                    align: "center"
                }
            },
        ],
        [],
    );

    return (
        <>
            {data.length == 0 ?
                <CircularProgress />
                :
                <Fade in={true} timeout={1000}>
                    <TableContainer component={Paper} sx={{ maxHeight: "100vh" }}>
                        <MaterialReactTable
                            columns={columnsUser}
                            data={data}
                            enableColumnResizing
                            columnResizeMode="onChange"
                            enableColumnDragging={false}
                            enableDensityToggle={false}
                            enableHiding={false}
                            enableGrouping={true}
                            enableFullScreenToggle={false}
                            enableStickyHeader

                            renderDetailPanel={({ row }) => (
                                <TableContainer component={Paper} sx={{ maxHeight: "100vh" }}>
                                    <MaterialReactTable
                                        columns={columnsPoin}
                                        data={[row.original]}
                                        enableColumnActions={false}
                                        enableColumnFilters={false}
                                        enablePagination={false}
                                        enableSorting={false}
                                        enableBottomToolbar={false}
                                        enableTopToolbar={false}
                                        muiTableBodyRowProps={{ hover: false }}
                                    />
                                </TableContainer>
                            )}
                        />
                    </TableContainer>
                </Fade>
            }
        </>
    );

};

export default MaterialTable;
