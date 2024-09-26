import { Button, Card, Divider, Grid, Link, Page, Spacer, Text } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck } from '@geist-ui/icons'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Page scale={-1}>
      <Page.Header marginTop="20px">
        <Text h1>Início</Text>
        <Divider my={5} h={2}></Divider>
      </Page.Header>
      <Page.Content justify="center" alignItems="center" direction="column">
        <Grid.Container justify="center" alignItems="center" direction="column">
          <Grid xs={24}>
            <Text h3>Bem vindo ao <Text span style={{color: "blue"}}>PET</Text> escolha uma das opções a baixo para proseguir.</Text>
          </Grid>
          <Grid xs={24} style={{ background: 'white', borderRadius: '15px' }}>
            <Spacer h={5}/>
          </Grid>

          <Grid.Container
            gap={3}
            justify="center"
          >
            <Grid md={12}>
              <Card type={"secondary"} width="100%">
                <Text h4 my={0} style={{ textTransform: 'uppercase' }}>Loja</Text>
                <Text>Nossa página de lojas parceiras do PET para você encontrar tudo o que precisa para seu bixinho.</Text>
                <Grid>
                  <Button 
                    type="secondary" 
                    width="100%" 
                    height="50px" 
                    font="18px" 
                    onClick={() => navigate("/loja")}
                    icon={<ShoppingCart />}>
                      Loja
                    </Button>
                </Grid>
              </Card>
            </Grid>
            <Grid md={12}>
              <Card type={"violet"} width="100%">
                <Text h4 my={0} style={{ textTransform: 'uppercase' }}>Hospedagem</Text>
                <Text>Porque não explorar nossos hoteis bom pra cachorro? Vai sair de ferias? Reserve um hotel para seu pet e deixe que cuidamos dele com muito carinho.</Text>
                <Grid>
                  <Button 
                    type="secondary" 
                    width="100%" 
                    height="50px" 
                    font="18px" 
                    onClick={() => navigate("/reserva")}
                    icon={<BookOpen />}>
                      Hospedagem
                    </Button>
                </Grid>
              </Card>
            </Grid>
            <Grid md={24}>
              <Card type={"warning"} width="100%">
                <Text h4 my={0} style={{ textTransform: 'uppercase' }}>TIME PET</Text>
                <Text>Entre para o time da Pet, sendo vendedor no nosso e-comerce ou também podendo fazer parte da nossa rede de hotelaria.</Text>
                <Grid>
                  <Button 
                    type="secondary" 
                    width="100%" 
                    height="50px" 
                    font="18px" 
                    icon={<UserCheck />}>
                      Faça parte
                    </Button>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={24} style={{ background: 'white', borderRadius: '15px' }}>
              <Spacer h={4}/>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Page.Content>
      <Page.Footer height="100px">
        <Grid xs={24} style={{ background: 'white', borderRadius: '15px' }}>
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

export default Home;