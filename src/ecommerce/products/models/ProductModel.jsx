import {getDetailRow} from "../helpers/utils"

export function ProductModel(){
    let Producto = {
        IdInstitutoOK: { type: String },
        IdProdServOK: { type: String },
        IdProdServBK: { type: String },
        CodigoBarras: { type: String },
        DesProdServ: { type: String },
        Indice: { type: String },
        detail_row: getDetailRow(),
    };
    return Producto;
};