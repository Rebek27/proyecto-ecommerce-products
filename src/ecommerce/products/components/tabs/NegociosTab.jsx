import {Box} from "@mui/material";
// import OrdersTable from "../tables/OrdersTable.jsx";
import NegociosTable from "../tables/NegociosTable";

export default function NegociosTab({datosSeleccionados, setDatosSeleccionados}) {
    return (
        <Box>
            {/* <h1>Negocios</h1> */}
            <NegociosTable
                datosSeleccionados={datosSeleccionados}
                setDatosSeleccionados={setDatosSeleccionados}
            />
        </Box>
    );
}