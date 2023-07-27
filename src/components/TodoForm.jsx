import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !category) return;

    addTodo(title, category)

    setTitle("");
    setCategory("");
    console.log(title, category)
  }

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Digite o título' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}
