import {Button} from "../Button";
import {Container, Image, Price, ProductName} from "./styled";

export const Articulo = (props) =>{
    const {precio,nombre, imagen} = props
    return (
        <Container nombre={nombre}>
            <Image imagen={imagen}/>
            <ProductName>{nombre}</ProductName>
            <Price>${precio}</Price>
            <Button {...props}>Agregar al carro</Button>
        </Container>
    )
}