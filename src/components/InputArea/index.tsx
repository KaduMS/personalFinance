import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void;
}
export const InputArea = ({onAdd}:Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 9, 28),
            category: 'food',
            title: 'Item de teste',
            value: 250.25,
        }
        onAdd(newItem);
    }
    return (
        <C.Container>
            <button onClick={handleAddEvent}>Add</button>
        </C.Container>
    )
}