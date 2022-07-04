import styled from "@emotion/styled"

const Result = styled.div`
  color: white;
  font-size: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px ;
`
const Imagen = styled.img`
  display: block;
  width: 120px;

`


const Texto = styled.p`
  font-size: 18px;
  span { 
    font-weight: 700;
  }
  
`
const Precio = styled.p`
  font-size: 24px;
  span { 
    font-weight: 700;
  }
`

 const Resultado = ({resultado}) => { 
  const  { PRICE, HIGHDAY, LOWDAY, 
    CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE } = resultado
  
  return (
   <Result> 
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
    <div> 
      <Precio>El precio es de: <span> {PRICE} </span></Precio>
      <Texto>El precio mas alto del dia:  <span> {HIGHDAY} </span></Texto>
      <Texto>El precio mas bajo del dia: <span> {LOWDAY} </span></Texto>
      <Texto>Variacion ultimas 24hs: <span> {CHANGEPCT24HOURS} </span></Texto>
      <Precio>Ultima actualizacion: <span> {LASTUPDATE} </span></Precio>
    </div>


  </Result> 
  )
}
 
export default Resultado
