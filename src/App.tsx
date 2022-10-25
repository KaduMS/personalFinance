import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { Categories } from "./Data/Categories";
import { items } from "./Data/Items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth))
  }, [list, currentMonth])
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de Informacoes*/}

        {/* Area de inserção*/}

        <TableArea list={filteredList} /> {/*to do */}
      </C.Body>
    </C.Container>
  );
};

export default App;
