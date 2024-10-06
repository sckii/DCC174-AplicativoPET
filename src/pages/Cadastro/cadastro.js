import { Button, Grid, Link, Page, Spacer, Text, useToasts, Avatar, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { Home} from '@geist-ui/icons'
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Cadastro = () => {
  
  const navigate = useNavigate();
  
  return (
	<Page scale={-1} style={{position: "relative"}}>
	  <Page.Header marginTop="20px" >
		<Text h1> <Home cursor="pointer" onClick={() => navigate("/")}/> Cadastro </Text>
	  </Page.Header>
	  <Page.Content>
			<h1 style={{fontSize: '2em'}}>Qual serviço deseja oferecer?</h1>
			<div style={{marginTop: "50px"}}>
				<div style={{border: "solid black 1px", borderRadius: "1em", padding: '10px', marginBottom: "30px"}}>
					<h2>Anfitrião</h2>
					<p>Os clientes irão agendar uma data e levar seus pats até o seu local para que sejam cuidados.</p>
					<Button onClick={() => navigate("/cadastro/anfitriao")} width="100%" type="secondary">Anfitrião</Button>
				</div>
				<div style={{border: "solid gray 1px", borderRadius: "1em", padding: '10px', marginBottom: "30px", color: "gray"}}>
					<h2>Cuidador</h2>
					<p>Você irá até a casa dos clientes nas datas e horarios acordados para dar comida e água para os pets.</p>
					<Button width="100%" style={{backgroundColor: "gray"}} disabled="true" type="secondary">Cuidador</Button>
				</div>
			</div>
	  </Page.Content>
	</Page>
  )
}

export default Cadastro