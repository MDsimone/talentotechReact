export function formatearPrecio(precio) {
    if(!precio) return "Precio no disponible";
    const limpio = parseFloat(precio.replace('$', '').replace(/,/g, '').trim());
    if(isNaN(limpio)) return "Precio no disponible";
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(limpio);
}
export default formatearPrecio;