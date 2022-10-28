import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as C from "./styles";

type Props = {
  list: Item[];
  onRemove: (index: number) => void;
};
export const TableArea = ({ list, onRemove }: Props) => {

  return (
    <C.Table>
      <thead>
        <tr>
          {/*to do */}
          <C.TableHeadColumn width={130}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={100}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <>
            <TableItem key={index} item={item} />
            <span onClick={() => onRemove(index)}>Excluir</span>
          </>
        ))}
      </tbody>
    </C.Table>
  );
};
