import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Categories } from "./Data/Categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [openTableArea, setOpenTableArea] = useState(false);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (Categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
    setOpenTableArea(true);
  };

  const handleRemoveItem = (index: number) => {
    let newListR = [...list];
    newListR.splice(index, 1);
    setList(newListR);
    if (newListR.length <= 0) {
      setOpenTableArea(false);
    }
  };

  console.log({ filteredList });

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>PersoFinance</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Area de inserção*/}
        <InputArea onAdd={handleAddItem} />

        {openTableArea && (
          <TableArea list={filteredList} onRemove={handleRemoveItem} />
        )}
      </C.Body>
    </C.Container>
  );
};

export default App;
