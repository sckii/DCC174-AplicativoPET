import { Button, Card, Divider, Grid, Page, Spacer, Text, useTheme } from "@geist-ui/core";
import { ShoppingCart, BookOpen, UserCheck } from '@geist-ui/icons'

const Home = () => {
  const { palette } = useTheme();
  return (
    <Page>
      <Page.Header marginTop="20px">
        <Text h1>Início</Text>
        <Divider my={5} h={2}></Divider>
      </Page.Header>
      <Page.Content justify="center" alignItems="center" direction="column">
        <Grid.Container justify="center" alignItems="center" direction="column">
          <Grid xs={24}>
            <Text h3>Bem vindo ao <Text span type="success">PET</Text> escolha uma das opções a baixo para proseguir.</Text>
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
                      Entre para o time
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
      <Page.Footer>
        <Text p>Criado por Samuel e Arthur</Text>
      </Page.Footer>
    </Page>
  );
}

export default Home;