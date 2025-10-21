import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
/*Hook personalizado para obtener un producto basado en la ruta actual (ID y tipo)*/
function normalizar(str) {
  return str?.toString().trim().toLowerCase() || "";/* para limpiar strings: quita espacios y pasa a minúsculas una cadena para comparaciones seguras */
}

export default function useProductoPorRuta(productos) {
  const { id, tipo } = useParams();/* Obtiene el ID y tipo del producto desde la URL actual*/
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
setCargando(true);
setError(null);
  
 try {
    const safeId = normalizar(id);
    const safeTipo = normalizar(tipo);

     if (!Array.isArray(productos)) {
        throw new Error("La fuente de productos no es un array");
      }

   const encontrado = productos.find(p => {/* Busca el producto.id que coincide con el ID(safeId) y, si se proporciona, con el tipo tambien */
        const pId = normalizar(p.id);
        const pTipo = normalizar(p.tipo);
        return pId === safeId && (!tipo || pTipo === safeTipo);/* compara pid(id de producto) con safeId (id de la URL) y si tipo existe compara pTipo con safeTipo si no existe entonces !tipo es true y acepta cualquier tipo */
      });
    setProducto(encontrado || null);/* si encuentra el producto lo asigna, sino asigna null */
 } catch (err) {
    setError(err.message);
    setProducto(null);
 } finally {
    setCargando(false);
 }  
}, [id, tipo, productos]);

  return {producto, cargando, error};
}
