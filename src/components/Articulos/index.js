import {Articulo} from "../Articulo";
import {Container} from "./styled";

export const Articulos = (props) =>{
    const productos = props.data.articulos
    return(
        <Container>
            {
            productos.map(pr=>{
                return <Articulo key={pr.id} {...pr} agregarAlCarro={props.agregarAlCarro}/>

            })
        }</Container>


    )
}