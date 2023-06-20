export interface Products {
    destacado: number,
    nombre: string,
    id_producto: number,
    id_subcategoria: number, 
    imagenes: Imagenes[],
    precio: number,
    vendible: number,
    stock: number,
    garantia: number,
    iva: number, 
}


export interface Imagenes {
    id_producto: number,
    nombre: string,
    orden: number
}
