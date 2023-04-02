import * as S from "./styles";
import { Item } from "../../types/item";
import { useState } from "react";
type Props = {
    item:Item;
}
export const Element = ({item}:Props) =>{
    const [isChecked, setIsChecked] = useState<boolean>(item.done);
    return(
    <S.Container done={isChecked}>
        <input type="checkbox"
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
        />
        <label>
            {item.name}
        </label>
    </S.Container>
    )
}