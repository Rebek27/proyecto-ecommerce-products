import {Box} from "@mui/material";
import {useState,useEffect} from "react";
import ProductsNavTab from "../components/tabs/ProductsNavTab"
import ProductTab from "../components/tabs/ProductTab"
import NegociosTab from "../components/tabs/NegociosTab"
import Presentaciones from "../components/tabs/Presentaciones"
import InfoAdTab from "../components/tabs/InfoAdTab"
import EstatusTab from "../components/tabs/EstatusTab"

export default function Orders() {

    // Indicamos que al iniciar no hay ninguna tab seleccionada
    const [currentRowInOrdersTab, setCurrentRowInOrdersTab] = useState(null);

    // Indicamos que el estado inicial del tab page principal por default sera ORDENES
    const [currentNameTabInPrincipalTab, setCurrentNameTabInPrincipalTab] = useState("PRODUCTOS");

    // // useState para guardar los ids seleccionados y compartirlos entre tabs.
    const [datosSeleccionados, setDatosSeleccionados] = useState({
        IdInstitutoOK: "0",
        IdProdServOK: "0",
        IdProdServBK: "0"
    });

    //SI ya HAY un producto seleccionado
    const [isSelected,setIsSelected] = useState(false);
    
    //Prueba para validar que este un id seleccionado  
    useEffect(()=>{
        console.log(datosSeleccionados);
        if(datosSeleccionados.IdInstitutoOK === "0" && datosSeleccionados.IdProdServOK === "0" ){
            console.log('Desactivar TABs');
            setIsSelected(true);
        } else{
            console.log('ACTIVAR Tabs');
            setIsSelected(false);
        }
    },[datosSeleccionados]);

    

    return (
        <Box>
            <ProductsNavTab
                setCurrentRowInOrdersTab={setCurrentRowInOrdersTab}
                setCurrentNameTabInPrincipalTab={setCurrentNameTabInPrincipalTab}
                isSelected={isSelected}
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