import {Articulos} from './components/Articulos'
import {Fragment, useState} from "react";
import {Navbar} from "./components/Navbar";

const informacion ={
    articulos:[
        {id:1,nombre:'Homepod Mini',precio:99,imagen:'/imgs/homepod-mini.jpg'},
        {id:2,nombre:'iMac',precio:1200,imagen:'/imgs/imac.jpeg'},
        {id:3,nombre:'iPad Mini',precio:400,imagen:'/imgs/ipad-mini.jpg'},
        {id:4,nombre:'iPhone 13 Pro',precio:1100,imagen:'/imgs/iphone13-pro.jpg'},
        {id:5,nombre:'Macbook',precio:1600,imagen:'/imgs/macbook-pro.png'},
    ],
    carrito:[
    ]
}



function App() {
    const [data,setData]=useState(informacion)
    const agregarAlCarro = (pr)=>{
        if (data.carrito.find(x=> x.id === pr.id)){
            data.carrito = data.carrito.map(x => x.id === pr.id ? ({...x, cantidad: x.cantidad + 1}) : x)
        }else{
            data.carrito.push({...pr,cantidad:1})
        }
        setData({...data})
    }
    const borrardelCarro = (x) => {
        // eslint-disable-next-line no-restricted-globals
        const r = confirm(`Eliminar ${x.nombre}?`)
        if(r === true){
            data.carrito.splice(data.carrito.indexOf(x),1)
            setData({...data})
        }
    };


    let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
  return (
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito} borrardelCarro={borrardelCarro}/>
        <Articulos data={data} agregarAlCarro={agregarAlCarro}/>
      </Fragment>
  );
}

export default App;
