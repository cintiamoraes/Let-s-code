import React from 'react';

class App extends React.Component{

    render(){
        return (
          //Posso colocar div ou fragmento vazio para gerar um encapsulamento.
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            
            <div>
            <p>
              { new Date().toLocaleDateString("pt-BR") }
            </p>
            </div>
           
          </>
        );
    }
}

export default App;