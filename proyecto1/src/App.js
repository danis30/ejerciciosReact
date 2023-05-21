import './App.css';
import image1 from './images/rey_atanagildo.png';
import image2 from './images/rey_leogivildo.png';
import image3 from './images/rey_sisebuto.png';
import './miCss.css';

function App() {
  let nombres=["Atanagildo","Leogivildo","Sisebeuto"];
  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={image1}/>
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={image2}/>
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img src={image3}/>
        <div className='nombre'>{nombres[2]}</div>
      </div>

    </div>
  
  );
}

export default App;
