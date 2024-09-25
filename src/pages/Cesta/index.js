import { Button, Card, Divider, Grid, Input, Link, Page, Spacer, Text, Image, Pagination, useToasts, Table, useModal, Modal, Loading } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck, Search, ChevronRight, ChevronLeft, Plus, Home, PlusSquare, ShoppingBag, CornerUpLeft, Trash2, CheckCircle } from '@geist-ui/icons'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cesta = () => {
  const { setToast } = useToasts();
  const { visible, setVisible, bindings } = useModal();
  
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [cestaItens, setCestaItens] = useState([]);
  const [dadosCesta, setDadosCesta] = useState({
    totalProdutos: 10,
    total: 203.05,
    frete: 6.99,
  })

  const navigate = useNavigate();
  
  function handleCesta() {
    let storage = window.localStorage.getItem("storage");
    if (!storage) {
      window.localStorage.setItem("storage", JSON.stringify({produtos: []}))
      storage = {
        produtos: []
      }
    } else {
      storage = JSON.parse(storage);
    }
    
    const produtos = [];
    const dados = {
      totalProdutos: 0,
      total: 0,
      frete: 6.99,
    };

    storage.produtos.forEach(produto => {
      if (produto) {
        dados.totalProdutos++;
        dados.total += parseFloat(produto.preco.split(" ")[1])
        const findedProd = produtos.findIndex(e => e.nome === produto.nome);
        if (findedProd >= 0) {
          produtos[findedProd].count += 1;
        } else {
          produto.count = 1;
          produtos.push(produto)
        }
      }
    })

    setDadosCesta(dados);
    setCestaItens(produtos);
  }

  function removeFromCesta(e) {
    
    const produtoEscolhido = e.target.parentNode.parentNode.childNodes[1].innerText
    setToast({
      text: "O produto " + produtoEscolhido + " foi removido da cesta.",
      type: "secondary",
    })

    let storage = window.localStorage.getItem("storage");

    if (!storage) {
      window.localStorage.setItem("storage", JSON.stringify({produtos: []}))
      storage = {
        produtos: []
      }
    } else {
      storage = JSON.parse(storage);
    }

    const novoStorage = storage;
    const indexToRemove = novoStorage.produtos.findIndex(prod => produtoEscolhido.includes(prod.nome));
    console.log(produtoEscolhido)
    if (indexToRemove < 0) return;

    novoStorage.produtos[indexToRemove] = null
    novoStorage.produtos = storage.produtos.filter(e => e)
    console.log(novoStorage)
    window.localStorage.setItem("storage", JSON.stringify(novoStorage))
    handleCesta();
  }

  function handleCompraRealizada() {
    setTimeout(() => {
      setCompraRealizada(true);
      window.localStorage.setItem("storage", JSON.stringify({produtos: []}))
    }, 2000);
  }

  useEffect(() => {
    handleCesta();
  }, [])
  return (
    <Page scale={-1} style={{position: "relative"}}>
      <Page.Header marginTop="20px" >
        <Text h1> <CornerUpLeft cursor="pointer" onClick={() => navigate("/loja")}/> Cesta</Text>
      </Page.Header>
      <Page.Content justify="center" >
        <Grid.Container xs={24} direction="collumn">
          <Grid xs={24} direction="row">
            <Text h4 b height="10px">Endereço</Text>
            <Text type="secondary" p>R. Dr. José Pereira Gomes, 813B - Jardim das Oliveiras</Text>
          </Grid>
          <Grid direction="row">
            <Text h4 b height="10px">Entrega</Text>
            <Text type="secondary" p >Entrega padrão | R$ 6,99</Text>
          </Grid>
          <Grid direction="row">
            <Text h4 b height="10px">Pagamento</Text>
            <Text type="secondary" p >Visa *1234</Text>
          </Grid>
          <Grid direction="row">
            <Text h4 b height="10px">Cupons</Text>
            <Text type="secondary" p >Nenhum aplicado</Text>
          </Grid>
          <Grid>
            <Text h4>Produtos</Text>
            {
              cestaItens.length ?
              cestaItens.map(produto => (
                  <Card px={1} key={produto.url} margin="10px" style={{position: "relative", cursor: "pointer", width: "100%", maxWidth: "330px", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "row"}}>
                    <Image  src={produto.url} style={{maxWidth:"140px"}} />
                    <Text width="100%"  style={{textAlign: "center"}} type="secondary" p>{produto.loja}</Text>
                    <Text width="100%"  style={{textAlign: "center"}} b p>{produto.nome}</Text>
                    <Text width="100%"  style={{textAlign: "center"}} b p>Quantidade: {produto.count}</Text>
                    <Text width="100%" style={{textAlign: "center", color: "blue", fontSize: "18px", letterSpacing: "2px"}} p b>{produto.preco}</Text>
                    <Trash2 onClick={(e) => removeFromCesta(e)} size={34}/>
                  </Card>
                ) 
              ) : (<><Text type="secondary">Nenhum produto adicionado</Text></>)
            }
          </Grid>
          {
            cestaItens.length ? (
              <Grid.Container>
                <Spacer h={4}/>
                <Grid style={{width:"100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Text p>Subtotal ({dadosCesta.totalProdutos})</Text>
                  <Text p b style={{letterSpacing: "2px"}}>R$ {dadosCesta.total.toFixed(2)}</Text>
                </Grid>
                <Grid style={{width:"100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Text p>Preço Frete</Text>
                  <Text p b style={{letterSpacing: "2px"}}>R$ {dadosCesta.frete}</Text>
                </Grid>
                <Grid style={{width:"100%", height: "40px",display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Text p>Total</Text>
                  <Text p b style={{letterSpacing: "2px"}}>R$ {(dadosCesta.frete + dadosCesta.total).toFixed(2)}</Text>
                </Grid>
                <Button my={2} type="secondary" width="100%" onClick={() => {setVisible(true); handleCompraRealizada()}}>Fechar Pedido</Button>
              </Grid.Container>
            )
            : <></>
          }
          
        </Grid.Container>
        <Modal {...bindings}>
          <Modal.Title> {compraRealizada ? "Pagamento Realizado" : "Processando pagamento" }</Modal.Title>
          <Modal.Content style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            {
              compraRealizada ? <CheckCircle color="blue"/> : 
              <Loading type="success" />
            }
          </Modal.Content>
          {
            compraRealizada ? 
            <Modal.Action passive onClick={() => {setVisible(false); navigate("/loja")}} font={1.5}>
              Concluir
            </Modal.Action> : 
            <></>
          }
        </Modal>
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

export default Cesta;