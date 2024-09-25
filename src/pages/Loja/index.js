import { Button, Card, Divider, Grid, Input, Link, Page, Spacer, Text, Image, Pagination, useToasts } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck, Search, ChevronRight, ChevronLeft, Plus, Home, PlusSquare, ShoppingBag } from '@geist-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loja = () => {
  const { setToast } = useToasts();

  const imagesUrl = [
    "https://http2.mlstatic.com/D_NQ_NP_869421-CBT72347696158_102023-O.webp",
    "https://ga-petfoodpartners.co.uk/content/uploads/2021/11/Pet-Food-Trends-Main-Banner.png",
    "https://www.petfoodsolution.com.br/br/img/caes/prohealth-filhotes-rm.jpg?1",
    "https://www.petfoodinstitute.org/wp-content/uploads/2024/06/pet-food-solid-background.jpg"
  ];

  const categorias = [
    {
      nome: "Cachorro",
      url: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
    },
    {
      nome: "Gato",
      url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC4DtHTGprsp7K8u0ZlfSDmIDplvQYH5vniT0I3rpcl6wqBh8b"
    },
    {
      nome: "Papagaio",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSC34BJRINjYu2ro_f-2YfABMqWz53zUOCgkMo6XJKvSugcbMOg"
    },
  ]
  const produtos = [
    {
      nome: "Petisco Dreamies Frango 40g",
      loja: "Gatos & Cia",
      url: "https://images.petz.com.br/fotos/1683816692016_mini.jpg",
      preco: "R$ 7.49"
    },
    {
      nome: "Raçao Reino das aves",
      loja: "Passaros do reino de deus",
      url: "https://images.petz.com.br/fotos/1631632121850_mini.jpg",
      preco: "R$ 12.00"
    },
    {
      nome: "Whiskas Tempatations Anti Bola de pelo",
      loja: "Agropecuaria Raphael",
      url: "https://images.petz.com.br/fotos/1683815996213_mini.jpg",
      preco: "R$ 10.34"
    },
    {
      nome: "Raçao Sempre Vita",
      loja: "Aves de rapina . com",
      url: "https://images.petz.com.br/fotos/40013030000216-1_mini.jpg",
      preco: "R$ 12.00"
    },
    {
      nome: "Antipulgas Simparic 20mg",
      loja: "Veterinario Marcos Mignon",
      url: "https://images.petz.com.br/fotos/1502308227115_mini.jpg",
      preco: "R$ 101.90"
    },
    {
      nome: "Anti-inflamatório Prednisolona 10 Comprimidos",
      url: "https://images.petz.com.br/fotos/1572902817776_mini.jpg",
      loja: "Veterinario Marcos Mignon",
      preco: "R$ 74.99"
    }
  ]

  const [selectedImageUrl, setSelectedImageUrl] = useState(imagesUrl[0]);
  function handleImageChange(imageNumber) {
    setSelectedImageUrl(imagesUrl[imageNumber - 1])
  }

  const navigate = useNavigate();
  
  function handleCesta(e) {
    const produtoEscolhido = e.target.parentElement.parentElement.childNodes[1].innerText
    let storage = window.localStorage.getItem("storage");
    if (!storage) {
      window.localStorage.setItem("storage", JSON.stringify({produtos: []}))
      storage = {
        produtos: []
      }
    } else {
      storage = JSON.parse(storage);
    }
    
    const localProdutos = storage;
    localProdutos.produtos.push(produtos.find(produto => produtoEscolhido.includes(produto.nome)))
    window.localStorage.setItem("storage", JSON.stringify(localProdutos))

    setToast({
      text: "O produto foi adicionado à cesta.",
      type: "secondary",
    })
  }

  return (
    <Page scale={-1} style={{position: "relative"}}>
        <Card onClick={e => navigate("/cesta")} type="dark" style={{position: "fixed", right: "40px", top: "30px", zIndex: "100", borderRadius: "100px"}}>
          <ShoppingBag color="white" size={24}/>
        </Card>
      <Page.Header marginTop="20px" >
        <Text h1> <Home cursor="pointer" onClick={() => navigate("/")}/> <Text span style={{color: "blue"}}>PET</Text> Loja</Text>
      </Page.Header>
      <Page.Content justify="center" alignItems="center" direction="column">
        <Grid.Container gap={2} justify="center" direction="column">
          <Grid xs={24}>
            <Input scale={4/3} placeholder="Pesquisar" width="100%" icon={<Search />}/>
          </Grid>         
          <Grid xs={24} justify="center">
            <Card style={{
              backgroundImage: `url(${selectedImageUrl})`,
              width: "100%",
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              maxWidth: "700px"
            }}>
              <Pagination 
                onChange={handleImageChange}
                count={4} 
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                width="100%"
              >
                <Pagination.Next><ChevronRight /></Pagination.Next>
                <Pagination.Previous><ChevronLeft /></Pagination.Previous>
              </Pagination>
            </Card>
          </Grid>
          <Grid.Container xs={24} justify="center" direction="column" width="100%">
            <Grid><Text h3>Categorias</Text></Grid>
            <Grid.Container gap={1} xs={24} justify="center" direction="row" width="100%">
              {
                categorias.map(categoria => {
                  return (
                  <Card style={{cursor: "pointer", border: 0, width: "95px", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}} >
                      <Card style={{
                        backgroundImage: `url(${categoria.url})`,
                        width: "100%",
                        height: "70px",
                        borderRadius: "100px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        cursor: "pointer"
                      }}/>
                      <Text width="100%" style={{textAlign: "center"}} p>{categoria.nome}</Text>
                  </Card>)
                })
              }
            </Grid.Container>
          </Grid.Container> 
          <Spacer h={4}/>
          <Grid.Container xs={24} justify="center" direction="column" width="100%">
            <Grid><Text h3>Produtos</Text></Grid>
            <Grid.Container gap={1} xs={24} justify="center" width="100%">
            {
              produtos.map(produto => {
                return (
                  <Card margin="10px" style={{position: "relative", cursor: "pointer", width: "100%", maxWidth: "330px", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
                    <Image  src={produto.url} style={{maxWidth:"180px"}} />
                    <Text width="100%" height="10px" style={{textAlign: "center"}} type="secondary" p>{produto.loja}</Text>
                    <Text width="100%" height="45px" style={{textAlign: "center"}} b p>{produto.nome}</Text>
                    <Text width="100%" style={{textAlign: "center", color: "blue", fontSize: "18px", letterSpacing: "2px"}} p b>{produto.preco}</Text>
                    
                    <Button 
                      type="success" 
                      onClick={e => handleCesta(e)}
                      ghost
                      width="100%" 
                      height="50px" 
                      icon={<PlusSquare />}>
                        Adicionar a cesta
                    </Button>
                  </Card>
                )
              })
            }
            </Grid.Container>
          </Grid.Container> 
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

export default Loja;