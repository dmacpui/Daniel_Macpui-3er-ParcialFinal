import {Carro} from "../Carro";
import {NavBar} from "./styled";
import {useEffect, useRef} from "react";

export const Navbar = (props) => {
    const renderCount = useRef(0)
    useEffect(()=>{
        renderCount.current=renderCount.current+1
    })
    return(
        <NavBar>
            <p>Has hecho {renderCount.current} acciones en esta pagina</p>
            <Carro cantidad={props.cantidad} productos={props.productos} borrardelCarro={props.borrardelCarro}/>
        </NavBar>
    )
}