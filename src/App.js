import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista'


class App extends Component {
    render()
    {
        var listaCompras = ['Alface', 'Tomate', 'Queijo', 'Macarrão', 'Arroz'],
        listaTarefas = ['Lavar louça', 'Varrer sala', 'Levar o lixo para fora', 'Estudar React'];
 
        return (
            <div className='App'>
                <header className='App-header'>

                  <h1>{this.props.titulo}</h1>
                  <img src={logo} className='App-logo' alt='logo' />
                  <h3>Lista de Compras</h3>
                  <Lista elementos={listaCompras} />
  
                  <h3>Lista de Tarefas</h3>
                  <Lista elementos={listaTarefas} />
                </header>
            </div>
            
        )
    }
}

export default App;