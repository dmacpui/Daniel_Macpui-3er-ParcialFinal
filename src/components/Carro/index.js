import {useEffect, useState} from 'react'
import { Bubble } from '../bubble'
import {Container, CarroB, Lista, ListaContainer, Elemento, Borrar} from "./styled";
import axios from 'axios'


export const Carro = ({ cantidad, productos, borrardelCarro }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)
    const [conversion,setConversion] = useState()

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)


    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {from: 'USD', to: 'MXN', q: '500'},
        headers: {
            'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
            'x-rapidapi-key': '548de2325fmsh46a052a6db3855dp1657bcjsnc10bf7107192'
        }
    };
    useEffect(()=>{
        axios.request(options).then(function (response) {
            console.log(response.data);
            setConversion(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        console.log(conversion)
    },[options, productos]);


    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)*conversion
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto



    return (
        <Container>
            {cantidad > 0 && <Bubble qtt={productos.length} />}
            <CarroB onClick={handleMostrarCarro}>
               Carro
            </CarroB>
            {
                (cantidad > 0 && mostrarCarro) &&
                <Lista>
                    <ListaContainer >
                        {
                            productos.map(x => {
                                return (
                                    <Elemento>
                                        <img height={25} alt={x.nombre} src={x.imagen} />
                                        <span>({x.cantidad} x {(x.precio*conversion).toLocaleString()}) = <strong>{(x.cantidad * (x.precio*conversion)).toLocaleString()}</strong></span>
                                        <span>{x.nombre} <Borrar onClick={()=>borrardelCarro(x)}>X</Borrar></span>
                                    </Elemento>
                                )
                            })
                        }
                        <Elemento >
                            <strong>Sub total</strong>
                            <strong> {subTotal.toLocaleString()}</strong>
                        </Elemento>
                        <Elemento>
                            <strong>Impuesto</strong>
                            <strong> {impto.toLocaleString()}</strong>
                        </Elemento>
                        <Elemento >
                            <strong>Total a pagar</strong>
                            <strong> {totalPagar.toLocaleString()}</strong>
                        </Elemento>
                    </ListaContainer>
                </Lista>
            }
        </Container>

    )
}
