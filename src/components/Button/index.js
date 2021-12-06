import {Boton} from "./styled";
export const Button = (props) => {
    const {agregarAlCarro} = props
    return (
        <Boton onClick={()=>agregarAlCarro(props)}>{props.children}</Boton>
    )
}