import { useState } from "react";
import { Categories } from "../../Data/Categories";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(Categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria Inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor Inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };
  return (
    <C.Container>
      <C.InputField>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          className="dateItem"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputField>

      <C.InputField>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          className="catoryItem"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {Categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputField>

      <C.InputField>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          className="titleItem"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputField>

      <C.InputField>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="text"
          className="valueItem"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputField>

      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
    </C.Container>
  );
};
