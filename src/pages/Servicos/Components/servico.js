import { Avatar } from "@geist-ui/core"
import { Button, Grid, Link, Page, Spacer, Text, useToasts, Breadcrumbs, Checkbox } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const Servico = ({grayscale, date}) => {
	let imgSrc = 'https://i.pinimg.com/564x/18/a4/ee/18a4ee46df0aea9263f2533c6f96afbe.jpg'
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate("/chat")} 
			style={{ 
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				marginBottom: '15px',
				filter: grayscale ? "grayscale(100%)" : "none",
				cursor: 'pointer'
			}}
		>

			<div style={{ display: "flex", alignItems: "center" }}>
				<Avatar src={imgSrc} scale={3} />
				<div style={{ marginLeft: "20px" }}>
					<h4 style={{ margin: "0" }}>Margarida</h4>
					<span style={{ margin: "0" }}>Hospedagem, </span>
					<span>{date}</span>
				</div>
			</div>
			<Avatar scale={1.2} src="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg" />
		</div>
	)
}

export default Servico