import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/item';
import { Element } from './components/Element';
function App() {
  let items:Item[] = [
    {id:1, name: 'tomar banho', done:false},
    {id:2, name: 'escovar os dentes', done:true}
  ];
  const [list, setList] = useState<Item[]>(items);
  const [inputValue, setInputValue] = useState<string>('');
  const handleChangeInput = (value:string) => {
    console.log("info");
    setInputValue(value);
  };
  const handleInput = (value:string) => {
    const iputId:number = list.length;
    const inputElement:Item = {id:123, name:value, done:false}
    const newElement:Item[] = [...list, inputElement];
    setList(newElement);
    setInputValue('');
  }
  return (
    <S.Container>
      <S.Area>
        <S.Header>
          Lista de tarefas
        </S.Header>
        <label>Insira um novo elemento</label>
        <input
          type="text"
          name="insert"
          value={inputValue}
          onChange={(e) => handleChangeInput(e.target.value)}
        />
        <button onClick={() => handleInput(inputValue)}>
          Inserir
        </button>
        {list.map((item, index) => (
          <Element key={index} item={item}/>
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;
