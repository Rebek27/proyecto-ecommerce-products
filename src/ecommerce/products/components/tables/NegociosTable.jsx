import {useEffect, useState} from "react";

//Material UI
import {MaterialReactTable} from 'material-react-table';
import {Box, Stack, Tooltip, IconButton, Dialog} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";

// DB
import { getProduct } from "../../services/remote/get/getOneProduct";


const columnas = [
    {
        accessorKey: "IdNegocioOK",
        header: "ID Negocio",
        size: 30, //small column
     },
    {
        accessorKey: "detail_row.Activo",
        header: "Activo",
        size: 30, //small column
    },
    {
        accessorKey: "detail_row.Borrado",
        header: "Eliminado",
        size: 30, //small column
    },
];

const NegociosTable = ({datosSeleccionados,setDatosSeleccionados}) => {

    // controlar el estado del indicador (loading).
    const [loadingTable, setLoadingTable] = useState(true);

    // controlar el estado de la data.
    const [productsData, setProductsData] = useState([]);

    // Controlar la informacion seleccionada
    const [dataRow, setDataRow] = useState();

    // Función para manejar el clic en una fila
    const sendDataRow = (rowData) => {
        // Guardar la informacion seleccionada
        setDataRow(rowData.original);
    };

    async function fetchData() {
        try {
            // Obtener los id's seleccionados
            const {IdInstitutoOK, IdProdServOK,  IdProdServBK} = datosSeleccionados;

            // Verificar si fueron seleccionados los id's; de lo contrario, no hacer nada.
            if (IdInstitutoOK === "0" || IdProdServOK === "0" || IdProdServBK === "0") {
                setLoadingTable(false);
                return;
            }

            // Obtener los datos
            const productsData = await getProduct(IdProdServOK);
            setProductsData(productsData.negocios);

            // Cambiar el estado del indicador (loading) a false.
            setLoadingTable(false);
        } catch (error) {
            console.error("Error al obtener la data en useEffect: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <Box>
                <MaterialReactTable
                    columns={columnas}
                    initialState={{density: "compact", showGlobalFilter: true}}
                    data={productsData}
                    state={{isLoading: loadingTable}}
                    enableMultiRowSelection={false}
                    enableRowSelection={true}
                    muiTableBodyRowProps={({row}) => ({
                        onClick: row.getToggleSelectedHandler(),
                        onClickCapture: () => sendDataRow(row),
                        sx: {cursor: 'pointer'},
                    })}
                    renderTopToolbarCustomActions={() => (
                        <>
                            {/* ------- BARRA DE ACCIONES ------ */}
                            <Stack direction="row" sx={{m: 1}}>
                                <Box>
                                    <Tooltip title="Agregar">
                                        <IconButton
                                            // onClick={() => setOrdenesEstatusShowModal(true)}
                                        >
                                            <AddCircleIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Editar">
                                        <IconButton
                                            // onClick={() => setOrdenesUpdateEstatusShowModal(true)}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar">
                                        <IconButton
                                            // onClick={() => handleDelete()}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Detalles ">
                                        <IconButton
                                            // onClick={()=>setOrdenesDetailsEstatusModalShowModal(true)}
                                        >
                                            <InfoIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Refrescar">
                                        <IconButton
                                            onClick={fetchData}>
                                            <RefreshIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Stack>
                            {/* ------- BARRA DE ACCIONES FIN ------ */}
                        </>
                    )}
                />
                {/* M O D A L E S */}
                {/* <Dialog open={OrdenesEstatusShowModal}>
                    <OrdenesEstatusModal
                        OrdenesEstatusShowModal={OrdenesEstatusShowModal}
                        setOrdenesEstatusShowModal={setOrdenesEstatusShowModal}
                        datosSeleccionados={datosSeleccionados}
                        onClose={() => {
                            setOrdenesEstatusShowModal(false)
                        }}
                        fetchData={fetchData}
                    />
                </Dialog>
                <Dialog open={OrdenesUpdateEstatusShowModal}>
                    <OrdenesUpdateEstatusModal
                        OrdenesUpdateEstatusShowModal={OrdenesUpdateEstatusShowModal}
                        setOrdenesUpdateEstatusShowModal={setOrdenesUpdateEstatusShowModal}
                        datosSeleccionados={datosSeleccionados}
                        dataRow={dataRow}
                        onClose={() => {
                            setOrdenesEstatusShowModal(false)
                        }}
                        fetchData={fetchData}
                    />

                </Dialog>
                <Dialog open={OrdenesDetailsEstatusModalShowModal}>
                    <OrdenesDetailsEstatusModal
                        OrdenesUpdateEstatusShowModal={OrdenesDetailsEstatusModalShowModal}
                        setOrdenesUpdateEstatusShowModal={setOrdenesDetailsEstatusModalShowModal}
                        dataRow={dataRow}
                        onClose={() => {
                            setOrdenesDetailsEstatusModalShowModal(false)
                        }}
                    />

                </Dialog> */}
            </Box>
        </Box>
    );
};

export default NegociosTable;