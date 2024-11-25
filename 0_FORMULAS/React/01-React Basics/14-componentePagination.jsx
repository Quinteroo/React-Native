import "./componentPagination.css"

const componentPagination = ({ page, setPage }) => {
  <div className="pagination">
    <button disable={page === 1} onClick={() => setPage(page - 1)}>{"<"}</button> //? habría que configurar CSS cuando es disable
    <p>{page}</p>
    <button disable={page === 49} onClick={() => setPage(page + 1)}>{">"}</button>
  </div>
  //! es 49 porque es el límite que hemos calculado de dividir el total de personajes que nos da la API(total: 956) por el 
  //! número que le hemos pedido que nos de por cada llamada (limit: 20)
  //! también podemos calcular limit en función de la elección del usuario.
  //* en el proyecto presentado se puede ver el cáculo de limit
}

export default componentPagination