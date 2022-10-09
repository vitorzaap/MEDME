import { useNavigate } from "react-router-dom";

export default function Index(props) {
    
    const navigate = useNavigate();
	return (
		<div className="div-btn-blue">
			<button
				className="btn-simple-blue"
				onClick={async () => {
					try {
						
						navigate(`/avaliacoes/${props.id}/${props.idConsulta}`);
					} catch (err) {}
				}}>
				Avaliar Consulta
			</button>
		</div>
	);
}
