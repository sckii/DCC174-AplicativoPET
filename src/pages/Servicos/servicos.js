import { Button, Grid, Link, Page, Spacer, Text, useToasts, Avatar, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { Home} from '@geist-ui/icons'
import { useNavigate } from "react-router-dom";

import Servico from "./Components/servico";

const Servicos = () => {
  
  const navigate = useNavigate();
  
  return (
    <Page scale={-1} style={{position: "relative"}}>
      <Page.Header marginTop="20px" >
        <Text h1> <Home cursor="pointer" onClick={() => navigate("/")}/> Servicos </Text>
      </Page.Header>
      <Page.Content>
        <div>
          <h1 style={{fontSize: '2em'}}>Servicos Ativos</h1>
          <Servico date={'20 - 25 set'}/>
        </div>
        <div style={{marginTop: '50px'}}>
          <h1 style={{fontSize: '2em',}} >Finalizados</h1>
          <Servico grayscale={true} date={'25 - 27 ago'}/>
          <Servico grayscale={true} date={'10 - 15 jul'}/>
          <Servico grayscale={true} date={'01 - 03 jan'}/>
          </div>
      </Page.Content>
      <Page.Footer height="100px">
        <Grid xs={24} style={{ background: 'transparent', borderRadius: '15px' }}>
          <Spacer h={4}/>
          <Spacer h={4}/>
          <Spacer h={4}/>
        </Grid>
        <Text p>Criado por <Link href="https://github.com/sckii" color>Samuel</Link> e <Link href="https://github.com/Arthur-lc" color>Arthur</Link></Text>
        <Text p>
          <Link href="https://docs.google.com/document/d/1orN-mvggGG8bsbIqJfT2rpbsvWFwOeSINlxURMyWLj0/edit?usp=sharing" color>Documento de requisitos</Link><br/>
          <Link href="https://docs.google.com/document/d/1uk7bUxPO1PcEqEYPDv99SR3JVWwmh84-JvuFnzwO40I/edit?usp=sharing" color>Análise da Situação Atual</Link><br/>
          <Link href="https://docs.google.com/document/d/1TJcH1Y7mwPpZZ72KF8X3L-Qb6qWxlngwud8wsURb46k/edit?usp=sharing" color>Relatório de Pesquisa</Link><br/>
          <Link href="https://www.figma.com/proto/jbls2fanhAxQO7BShMJ9w6/Trab-Ihc?node-id=1-1084&node-type=canvas&t=omd3M2x5Xi6B6uT8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1084&share=1&show-proto-sidebar=1" color>Protótipo</Link>
        </Text>
        <Grid xs={24} style={{ background: 'white', borderRadius: '15px' }}>
          <Spacer h={4}/>
        </Grid>
      </Page.Footer>
    </Page>
  )
}

export default Servicos