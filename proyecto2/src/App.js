import './App.css';
import imagen1 from'./images/rey_atanagildo.png';
import imagen2 from'./images/rey_sisebuto.png';
import {useRef} from 'react';

function App() {

  const cambio=23.16;
  const refCaja=useRef();

  function incrementar(e){
    e.target.innerHTML=Number(e.target.innerHTML)+1;
    if(e.target.innerHTML>=10){
      e.target.innerHTML=1;
      e.target.style.backgroundColor="transparent";

    }else if(e.target.innerHTML>7){
      e.target.style.backgroundColor="red";
    }
  }

  const convertir = () =>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }

  const cambiar = (j) =>{
    if(j.target.src.includes("atanagildo")){
      j.target.src=imagen2;
    }
    else{
      j.target.src=imagen1;
    }
  }

  const lectura = (e) =>{
    refCaja.current.innerHTML=e.target.value;
  }
  
  return (
    <>
    <div ref={refCaja}className="Caja" onClick={incrementar}>1</div>
    <button onClick={convertir}>Aceptar</button>
    <div>
      <img onClick={cambiar}src={imagen1}/>
    </div>
    <input onChange={lectura} className="campo"/>
    </>
  );

}

export default App;
