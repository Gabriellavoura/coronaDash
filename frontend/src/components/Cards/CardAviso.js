import React from 'react';
import './Cardstyles.css';
import { UncontrolledAlert } from 'reactstrap';


class CardAviso extends React.Component{

 
  render(){
    return(
      <div className="CardContainer" >
    <UncontrolledAlert color="danger" className="AvisoCard">
      Os dados utilizados nesta plataforma são fornecidos pelos boletins epidemiológicos
      divulgados pelas Secretarias de Saúde Estaduais, disponíveis no site <a href="https://brasil.io/home" className="alert-link">Brasil.io</a>. Esses dados são atualizados
       diariamente quando os boletins são divulgados às  <b> 23:00 </b> no horário de Brasília.
       Portanto, estes dados podem estar até <b>2 dias úteis</b>  atrasados em relação aos 
       divulgados no boletim diário da prefeitura.
    </UncontrolledAlert>
      </div>
    );
  }
}

export default CardAviso;