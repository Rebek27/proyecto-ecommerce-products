import {Box} from "@mui/material";
import {useState} from "react";
//
import PresentacionesNavTab from "../tabs/PresentacionesNavTab.jsx";
import PresentacionesTab from "../tabs/PresentacionesTab.jsx";
import PresentacionArchivos from "../tabs/PresentacionArchivos.jsx";
import PresentacionesEstatus from "../tabs/PresentacionesEstatus.jsx";
import PresentacionesInfoAd from "../tabs/PresentacionesInfoAd.jsx";
import PresentacionPaquete from "../tabs/PresentacionPaquete.jsx";


export default function OrdenesFormaPagoTab({datosSeleccionados, setDatosSeleccionados}) {

    // indicamos que al iniciar no hay ningun Instituto seleccionado.
    const [currentRowInProveedoresTab, setCurrentRowInProveedoresTab] = useState(1);

    // indicamos que el estado inicial del tab page principal por default.
    const [currentNameTabInProveedoresTab, setCurrentNameTabInProveedoresTab] = useState("PRESENTACIONES");

    // // indicamos que el estado inicial de los datos del subdocumento
    // const [datosSecSubdocProveedores, setDatosSecSubdocProveedores] = useState({
    //     IdTipoPagoOK: "0"
    // });

    return (
        <Box>
            <PresentacionesNavTab
                currentRowInProveedoresTab={currentRowInProveedoresTab}
                setCurrentNameTabInProveedoresTab={setCurrentNameTabInProveedoresTab}
            />

            {currentNameTabInProveedoresTab == "PRESENTACIONES" &&
                <PresentacionesTab
                    // setDatosSecSubdocProveedores={setDatosSecSubdocProveedores}
                    // datosSeleccionados={datosSeleccionados}
                />
            }

            {currentNameTabInProveedoresTab == "ESTATUS" &&
                <PresentacionesEstatus
                    // datosSecSubdocProveedores={datosSecSubdocProveedores}
                    // datosSeleccionados={datosSeleccionados}
                />
            }

              {currentNameTabInProveedoresTab == "INFO AD" &&
                <PresentacionesInfoAd
                    // datosSecSubdocProveedores={datosSecSubdocProveedores}
                    // datosSeleccionados={datosSeleccionados}
                />
            }
              {currentNameTabInProveedoresTab == "PAQUETES" &&
                <PresentacionPaquete 
                    // datosSecSubdocProveedores={datosSecSubdocProveedores}
                    // datosSeleccionados={datosSeleccionados}
                />
            }
              {currentNameTabInProveedoresTab == "ARCHIVOS" &&
                <PresentacionArchivos
                    // datosSecSubdocProveedores={datosSecSubdocProveedores}
                    // datosSeleccionados={datosSeleccionados}
                />
            }




        </Box>
    );
}