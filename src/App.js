import React, {Component} from 'react'

class App extends Component{
  state = {
    nome:"Letícia",
    idade: 18,
    comida:"Lasanha",
    musicas: ["Apê 1001-Bin e Ludmilla","Não é por maldade-Ludmilla", "Oi-Lagum"]
  }
  render (){
    return (
      <div>
        <h1>Seu nome é {this.state.nome}</h1>
        <h2>Você está com {this.state.idade} anos</h2>
        <h3>Sua comida favorita é {this.state.comida}</h3>
        <h4>Seu top 3 de músicas é:</h4>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
      </div>
    )
  }
}

export default App 