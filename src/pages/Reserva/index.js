import { Button, Card, Divider, Grid, Input, Link, Page, Spacer, Text, Image, Pagination, useToasts, Avatar, Rating, Tooltip, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck, Search, ChevronRight, ChevronLeft, Plus, Home, PlusSquare, ShoppingBag, GitPullRequest, CornerUpLeft } from '@geist-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserva = () => {
  const { setToast } = useToasts();

  const navigate = useNavigate();
  const [page, setPage] = useState("data");
  return (
    <Page scale={-1} style={{position: "relative"}}>
      <Page.Header marginTop="20px" >
        <Text h1> <CornerUpLeft cursor="pointer" onClick={() => navigate("/hospedagem")}/> Reserva </Text>
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2}>
          <Grid>
            <Breadcrumbs scale={1.8}>
              <Breadcrumbs.Item href="#" style={{color: page === "data" ? "blue" : "gray"}} onClick={() => setPage("data")}>Data</Breadcrumbs.Item>
              <Breadcrumbs.Item href="#" style={{color: page === "seuPet" ? "blue" : "gray"}} onClick={() => setPage("seuPet")}>Seu PET</Breadcrumbs.Item>
            </Breadcrumbs>
          </Grid>
        </Grid.Container>
        {
          page === "data" ? <></> : (
            <Grid.Container gap={2} style={{maxWidth: "400px"}} my={2}>
              <li style={{listStyle: "none", width: "100%"}}>
                <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                    <Avatar src="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg" scale={3}/>
                    <Text px={1} b p font={1}>Thor</Text>
                  </div>
                  <Checkbox checked={false} scale={1.8}/>
                </ul>
                <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                    <Avatar src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkD1xxisso3_Va3yFFEmaKRMdULFaZ66SlOKVCnEAqeUDZc-emPLoveO6RSELV3ys9139XW69NNncHXJVq5N9EXQ4nKC-nUjuHD-2jZp4" scale={3}/>
                    <Text px={1} b p font={1}>Gabriel Vargas</Text>
                  </div>
                  <Checkbox checked={false} scale={1.8}/>
                </ul>
                <ul style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Button my={3} width="100%" type="secondary">Finalizar</Button>
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