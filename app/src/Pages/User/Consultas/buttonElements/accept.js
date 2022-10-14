import toast from "react-hot-toast";
import { statusConsult } from "../../../../api/userApi.js";
export default function Index(props) {
	return (
		<div>
			<button
				className="btn-simple-green"
				onClick={async () => {
					try {
						toast(
							(t) => (
								<span>
									Deseja <span style={{ color: "#5dce97", fontWeight: "bolder" }}>aceitar</span> a consulta <b>#{props.idConsulta}</b>?
									<button
										onClick={async () => {
											toast.dismiss(t.id);
											toast.loading("Carregando...")
											setTimeout(() => {
												toast.dismiss();
												toast.success(`Consulta #${props.idConsulta} aceita com sucesso!`);
											}, 1000)
											const r = await statusConsult(props.idConsulta, 2);
											setTimeout(() => {
												window.location.reload();
											}, 2000)
										}}
										style={{
											padding: ".6em 1.2em",
											backgroundColor: "#3DCC87",
											color: "#fff",
											border: "none",
											marginLeft: ".5em",
											borderRadius: ".5em",
											fontSize: ".92em",
										}}>
										Aceitar
									</button>
								</span>
							),
							{
								style: {
									width: "max-content",
									maxWidth: "max-content",
								},
							}
						);
					} catch (err) {
						if (err.response.status == 401) {
						}
					}
				}}>
				Aceitar Consulta
			</button>
			<button
				className="btn-simple-red"
				onClick={async () => {
					try {
						const r = await statusConsult(props.idConsulta, 3);
						toast(
							(t) => (
								<span>
									Deseja <span style={{ color: "#E23C3C", fontWeight: "bolder" }}>recusar</span> a consulta <b>#{props.idConsulta}</b>?
									<button
										onClick={async () => {
											toast.dismiss(t.id);
											toast.loading("Carregando...")
											setTimeout(() => {
												toast.dismiss();
												toast.success(`Consulta #${props.idConsulta} recusada com sucesso!`);
											}, 1000)
											const r = await statusConsult(props.idConsulta, 3);
											setTimeout(() => {
												window.location.reload();
											}, 2000)
											
										}}
										style={{
											padding: ".6em 1.2em",
											backgroundColor: "#E23C3C",
											color: "#fff",
											border: "none",
											marginLeft: ".5em",
											borderRadius: ".5em",
											fontSize: ".92em",
										}}>
										Recusar
									</button>
								</span>
							),
							{
								style: {
									width: "max-content",
									maxWidth: "max-content",
								},
							}
						);
					} catch (err) {
						if (err.response.status == 401) {
						}
					}
				}}>
				Recusar Consulta
			</button>
		</div>
	);
}
