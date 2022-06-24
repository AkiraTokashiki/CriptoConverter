import styled from "@emotion/styled"

 const Resultado = ({resultado}) => {
  const  { PRICE, HIGHDAY, LOWDAY, 
  CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE } = resultado
  
  return (
   <div> 
    <p>El precio es de: <span> {PRICE} </span></p>
    <p>El precio mas alto del dia:  <span> {HIGHDAY} </span></p>
    <p>El precio mas bajo del dia: <span> {LOWDAY} </span></p>
    <p>Variacopm ultimas 24hs: <span> {CHANGEPCT24HOURS} </span></p>
    <p>Ultima actualizacion: <span> {LASTUPDATE} </span></p>
    


  </div> 
  )
}
export default Resultado
