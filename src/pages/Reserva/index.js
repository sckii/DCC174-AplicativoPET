import { Button, Grid, Link, Page, Spacer, Text, useToasts, Avatar, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { Home} from '@geist-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

const Reserva = () => {
  const { setToast } = useToasts();

  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFim, setDataFim] = useState(new Date());
  
  const navigate = useNavigate();
  const [page, setPage] = useState("data");

  return (
    <Page scale={-1} style={{position: "relative"}}>
      <Page.Header marginTop="20px" >
        <Text h1> <Home cursor="pointer" onClick={() => navigate("/")}/> Reserva </Text>
      </Page.Header>
      <Page.Content>
        <Breadcrumbs scale={1.8} separator=">">
          <Breadcrumbs.Item href="#" style={{color: page === "data" ? "blue" : "gray"}} >Data</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#" style={{color: page === "seuPet" ? "blue" : "gray"}} >Seu PET</Breadcrumbs.Item>
        </Breadcrumbs>
        {
          page === "data" ? (
            <Grid.Container xs={24}>
              <Spacer h={4}/>
              <Grid justify="center" direction="row">
                <Text p h4>Data Inicio</Text>
                <Calendar onChange={setDataInicio} value={dataInicio}/>
              </Grid>
              <Spacer h={4}/>
              <Grid justify="center" direction="row">
                <Text p h4>Data Fim</Text>
                <Calendar onChange={setDataFim} value={dataFim}/>
              </Grid>
              <Button onClick={() => setPage("seuPet")} my={3} width="100%" type="secondary">Proximo</Button>

            </Grid.Container>
            ) : (
            <Grid.Container style={{maxWidth: "400px", width:"100%"}} my={2} mx={-1}>
              <li style={{listStyle: "none", width: "100%", margin: 0, padding: 0, boxSizing: "border-box"}}>
                <ul style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                    <Avatar src="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg" scale={3}/>
                    <Text px={0.4} b p font={1}>Thor</Text>
                  </div>
                  <Checkbox checked={false} scale={1.8}/>
                </ul>
                <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                    <Avatar src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkD1xxisso3_Va3yFFEmaKRMdULFaZ66SlOKVCnEAqeUDZc-emPLoveO6RSELV3ys9139XW69NNncHXJVq5N9EXQ4nKC-nUjuHD-2jZp4" scale={3}/>
                    <Text px={0.4} b p font={1}>Gabriel Vargas</Text>
                  </div>
                  <Checkbox checked={false} scale={1.8}/>
                </ul>
                <ul style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Button my={3} width="100%" type="secondary" onClick={() => navigate("/hospedagem")}>Ver Hoteis</Button>
                </ul>
              </li>
            </Grid.Container>
          )
        }
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
  );
}

export default Reserva;