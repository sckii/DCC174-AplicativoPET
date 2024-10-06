import { Button, Grid, Link, Page, Spacer, Text, useToasts, Avatar, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { ChevronLeft} from '@geist-ui/icons'
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Anfitriao = () => {

  const [page, setPage] = useState("escolher");
  const navigate = useNavigate();

  function goBakc() {
    if (page === "escolher") {
      navigate("/cadastro")
    }

    if ( page === "tamanho") {
      setPage("escolher")
    }

    if ( page === "endereco") {
      setPage("tamanho")
    }
    
    if ( page === "info") {
      setPage("endereco")
    }
  }
  
  return (
	<Page scale={-1} style={{position: "relative"}}>
	  <Page.Header marginTop="20px" >
		<Text h1> <ChevronLeft size={40} cursor="pointer" onClick={() => goBakc()}/> Anfitrião </Text>
	  </Page.Header>
	  <Page.Content>
			{page === "escolher" && (
				<>
          <h3>Quais especies deseja receber?</h3>
					<Grid.Container style={{maxWidth: "400px", width:"100%"}} my={2} mx={-1}>
            <li style={{listStyle: "none", width: "100%", margin: 0, padding: 0, boxSizing: "border-box"}}>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Cães</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Gatos</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Aves</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Roedores</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <Button my={3} width="100%" type="secondary" onClick={() => setPage("tamanho")}>Próximo</Button>
              </ul>
            </li>
          </Grid.Container>
				</>
			)}
			
      {page === "tamanho" && (
				<>
          <h3>Quais tamanhos pode receber?</h3>
					<Grid.Container style={{maxWidth: "400px", width:"100%"}} my={2} mx={-1}>
            <li style={{listStyle: "none", width: "100%", margin: 0, padding: 0, boxSizing: "border-box"}}>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Grande Porte</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Médio Porte</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                  <Text px={0.4} b p font={1}>Pequeno Porte</Text>
                </div>
                <Checkbox checked={false} scale={1.8}/>
              </ul>
              <ul style={{display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row", width: "100%"}}>
                <Button my={3} width="100%" type="secondary" onClick={() => setPage("endereco")}>Próximo</Button>
              </ul>
            </li>
          </Grid.Container>
				</>
			)}
      
      {page === "endereco" && (
				<>
          <h3>Endereço da hospedagem.</h3>
          <div style={{width: "100%", marginBottom: "30px"}}>
            <label htmlFor="estado">Estado:</label><br />
            <select id="estado" name="estado" required>
              <option value="">Selecione um estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select><br />
          </div>
          <div style={{width: "100%"}}>
            <labe>Cidade</labe><br />
            <input style={{width: "100%"}} type="text" required />
          </div>
          <div style={{width: "100%", marginBottom: "30px"}}>
            <labe>Bairro</labe><br />
            <input style={{width: "100%"}} type="text" required />
          </div>
          <div style={{width: "100%"}}>
            <labe>Rua</labe><br />
            <input style={{width: "100%"}} type="text" required />
          </div>
          <div style={{width: "100%"}}>
            <labe>Número</labe><br />
            <input style={{width: "100%"}} type="text" required />
          </div>
          <div style={{width: "100%"}}>
            <labe>Complemento</labe><br />
            <input style={{width: "100%"}} type="numero" required />
          </div>
          <Button my={3} width="100%" type="secondary" onClick={() => setPage("info")}>Próximo</Button>
				</>
			)}

      {page === "info" && (
        <>
          <h3>Onde os pets serão hospedados?</h3>
          <label>Descrição</label> <br />
          <textarea rows="4" placeholder="Fale sobre você e o local onde os pets serão hospedados" style={{width: "100%"}} />
          <div style={{marginTop: "30px"}}>
            <label>Fotos do local</label> <br />
            <input type="file" name="imagem" accept="image/*"></input>
          </div>
          <Button my={3} width="100%" type="secondary" onClick={() => navigate("/cadastro/confirmacao")}>Enviar Cadastro</Button>
        </>
      )}
	  </Page.Content>
	</Page>
  )
}

export default Anfitriao