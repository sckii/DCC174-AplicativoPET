import { Button, Card, Divider, Grid, Input, Link, Page, Spacer, Text, Image, Pagination, useToasts, Avatar, Rating, Tooltip } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck, Search, ChevronRight, ChevronLeft, Plus, Home, PlusSquare, ShoppingBag, GitPullRequest } from '@geist-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hospedagem = () => {
  const { setToast } = useToasts();

  const hoteis = [
    {
      "nome": "Maria de Lurdes",
      "descricao": "O Hotel PET VIP, administrado por Maria de Lurdes, é o local perfeito para seu pet desfrutar de uma estadia tranquila, com...",
      "avaliacao": 4,
      "hotel": "https://www.decao.com.br/adestramento-de-cao/imagens/preco-de-hotelzinho-para-cachorro.jpg",
      "avatar": "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg",
      "preco": "R$ 50.00/dia"
    },
    {
      "nome": "João da Silva",
      "descricao": "O Hotel PET Confort, gerenciado por João da Silva, é conhecido por proporcionar aos pets uma experiência relaxante e segura...",
      "avaliacao": 5,
      "hotel": "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg",
      "avatar": "https://img.freepik.com/fotos-gratis/homem-sorrindo-em-uma-paisagem-natural_23-2148948792.jpg",
      "preco": "R$ 60.00/dia"
    },
    {
      "nome": "Ana Paula",
      "descricao": "O Hotel PET Alegria, sob os cuidados de Ana Paula, oferece um ambiente cheio de diversão e cuidados especiais para seu pet...",
      "avaliacao": 3.5,
      "hotel": "https://static.wixstatic.com/media/7402a2_45d3c5a18f514abdb2a634034dc46eff~mv2.jpg/v1/crop/x_0,y_0,w_432,h_449/fill/w_518,h_485,al_c,lg_1,q_80,enc_auto/IMG_8904.jpg",
      "avatar": "https://img.freepik.com/fotos-gratis/mulher-jovem-com-sorriso-brilhante_23-2148992344.jpg",
      "preco": "R$ 55.00/dia"
    },
    {
      "nome": "Carlos Eduardo",
      "descricao": "No Hotel PET Bem-Estar, administrado por Carlos Eduardo, seu pet encontra uma combinação perfeita de conforto e carinho...",
      "avaliacao": 4,
      "hotel": "https://www.planetdoghotel.com.br/imagens/hoteis-para-cachorros-em-sao-paulo.jpg",
      "avatar": "https://img.freepik.com/fotos-gratis/homem-elegante-sorrindo-em-retrato_23-2148975321.jpg",
      "preco": "R$ 70.00/dia"
    },
    {
      "nome": "Fernanda Souza",
      "descricao": "A Pousada PET Sossego, gerenciada por Fernanda Souza, é ideal para pets que precisam de um ambiente calmo e acolhedor...",
      "avaliacao": 5,
      "hotel": "https://storage.googleapis.com/cmsapi.sistema.cim.br/C-307MMTG2XWCYRO/2021-05/ZFS0iTHLKOmnOZCa3eB2FlX0/html_content.jpeg?v=20220627161024",
      "avatar": "https://img.freepik.com/fotos-gratis/mulher-sorridente-com-uma-bonita-natureza-ao-fundo_23-2148761239.jpg",
      "preco": "R$ 45.00/dia"
    }
  ]

  const navigate = useNavigate();

  return (
    <Page scale={-1} style={{position: "relative"}}>
      <Page.Header marginTop="20px" >
        <Text h1> <Home cursor="pointer" onClick={() => navigate("/")}/> Hoteis </Text>
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2}>
        {
          hoteis.map(hotel => (
            <Grid onClick={() => navigate("/reserva")}>
              <Card style={{maxWidth: "400px"}}>
                <Grid.Container xs={24} gap={1} justify="center" direction="column">
                  <Grid xs={24} direction="row" width="100%" justify="space-between">
                    <Avatar src={hotel.avatar} scale={2}/>
                    <Text p b font={0.9}>{hotel.nome}</Text>
                    <Rating type="success" scale={0.4} count={5} value={5} />
                  </Grid>
                  <Grid direction="collumn" width="100%">
                    <Image src={hotel.hotel} style={{borderRadius: "10px"}}/>
                    <Text type="secondary" p font={0.8} style={{textAlign: "justify"}}>{hotel.descricao}</Text>
                    
                    <Grid xs={24} direction="row" width="100%" justify="space-between">
                      <Text width="100%" type="secondary" p font={1} b style={{textAlign: "justify", color: "#1E8138", letterSpacing: "2px"}}>{hotel.preco}</Text>
                      <Button width="100%" type="secondary">Reservar</Button>
                    </Grid>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>
          ))
        }
        </Grid.Container>
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

export default Hospedagem;