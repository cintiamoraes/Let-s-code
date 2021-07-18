/* eslint-disable no-useless-constructor */
import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome:''};
        this.changeNome = this.changeNome.bind(this);
    }
    changeNome = function(event){
        this.setState({nome: event.target.value});
    }
    render() {
        return (
            
            <>
        Nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
        );
    }
}

export default App3;