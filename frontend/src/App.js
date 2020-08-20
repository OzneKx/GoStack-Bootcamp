import React, { useState } from 'react';

import './App.css';

import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  // useState retorna um array com 2 posições
  // 1. Variável com seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);
    
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects"/>

      <img width={100} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;