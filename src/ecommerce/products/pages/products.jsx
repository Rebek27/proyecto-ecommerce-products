import {Box} from "@mui/material";
import {useState} from "react";
import ProductsNavTab from "../components/tabs/ProductsNavTab"
import ProductTab from "../components/tabs/ProductTab"
import NegociosTab from "../components/tabs/NegociosTab"
import Presentaciones from "../components/tabs/Presentaciones"
import InfoAdTab from "../components/tabs/InfoAdTab"
import EstatusTab from "../components/tabs/EstatusTab"

export default function Orders() {

    // Indicamos que al iniciar no hay ninguna tab seleccionada
    const [currentRowInOrdersTab, setCurrentRowInOrdersTab] = useState(0);

    // Indicamos que el estado inicial del tab page principal por default sera ORDENES
    const [currentNameTabInPrincipalTab, setCurrentNameTabInPrincipalTab] = useState("PRODUCTOS");

    // // useState para guardar los ids seleccionados y compartirlos entre tabs.
    const [datosSeleccionados, setDatosSeleccionados] = useState({
        IdInstitutoOK: "0",
        IdProdServOK: "0",
        IdProdServBK: "0"
    });

    return (
        <Box>
            <ProductsNavTab
                setCurrentRowInOrdersTab={setCurrentRowInOrdersTab}
                setCurrentNameTabInPrincipalTab={setCurrentNameTabInPrincipalTab}
            />

            {currentNameTabInPrincipalTab == "PRODUCTOS" &&
                <ProductTab
                    datosSeleccionados={datosSeleccionados}
                    setDatosSeleccionados={setDatosSeleccionados}
                />
            }
            {currentNameTabInPrincipalTab == "ESTATUS" &&
                <EstatusTab
                    datosSeleccionados={datosSeleccionados}
                    setDatosSeleccionados={setDatosSeleccionados}
                />
            }
            {currentNameTabInPrincipalTab == "PRESENTACIONES" &&
                <Presentaciones
                    // datosSeleccionados={datosSeleccionados}
                    // setDatosSeleccionados={setDatosSeleccionados}
                />
            }
            {currentNameTabInPrincipalTab == "NEGOCIOS" &&
                <NegociosTab
                    // datosSeleccionados={datosSeleccionados}
                    // setDatosSeleccionados={setDatosSeleccionados}
                />
            }
            {currentNameTabInPrincipalTab == "INFORMACION ADICIONAL" &&
                <InfoAdTab
                    // datosSeleccionados={datosSeleccionados}
                    // setDatosSeleccionados={setDatosSeleccionados}
                />
            }
        </Box>
    );
}