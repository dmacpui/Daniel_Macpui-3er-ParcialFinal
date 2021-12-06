import styles from "./styles";
import {Burbuja} from "./styled";

export const Bubble = ({qtt})=>{
    return(
        <Burbuja style={styles.burbuja}>{qtt > 0 ? qtt:qtt > 9?'9+':''}</Burbuja>
    )
}