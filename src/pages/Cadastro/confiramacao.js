import { Button, Grid, Link, Page, Spacer, Text, useToasts, Avatar, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const Confirmacao = () => {
  const navigate = useNavigate();

    return (
      <Page scale={-1} style={{position: "relative"}}>
        <Page.Header marginTop="20px" >
          <Text h1> Anfitrião </Text>
        </Page.Header>
        <Page.Content>
          <div style={{display: "flex", justifyContent: "center", height:"100%", width: "100%"}}>
            <p style={{fontWeight: "bold"}}>Seus dados foram enviados para análise.</p>
          </div>
          <Button my={3} style={{alignSelf: "flex-end"}} width="100%" type="secondary" onClick={() => navigate("/")}>Voltar para a Pagina Principal</Button>
        </Page.Content>
      </Page>
    )
}

export default Confirmacao;