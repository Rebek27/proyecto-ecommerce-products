import {Box, Tabs, Tab} from "@mui/material";
import React, {useState} from "react";

const presentacionesTabs = ["Presentaciones", "Estatus","Info ad","Paquetes","Archivos"];

const PresentacionesNavTab = ({currentRowInProveedoresTab, setCurrentNameTabInProveedoresTab}) => {

    const [currenTabIndex, setCurrentTabIndex] = useState(0);
    const handleChange = (e) => {

        setCurrentNameTabInProveedoresTab(e.target.innerText.toUpperCase());

        switch (e.target.innerText.toUpperCase()) {
            case "PRESENTACIONES":
                setCurrentTabIndex(0);
                break;
            case "ESTATUS":
                setCurrentTabIndex(1);
                break;
            case "INFO AD":
                setCurrentTabIndex(2);
                break;
            case "PAQUETES":
                setCurrentTabIndex(3);
                break;
            case "ARCHIVOS":
                setCurrentTabIndex(4);
                break;
        }

    };

    return (
        <Box sx={{border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5}}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {presentacionesTabs .map((tab) => {
                    return <Tab key={tab} label={tab} disabled={currentRowInProveedoresTab === null}/>;
                })}
            </Tabs>
        </Box>
    );
};
export default PresentacionesNavTab;