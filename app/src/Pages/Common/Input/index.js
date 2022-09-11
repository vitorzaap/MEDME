import "./index.scss";
import "../common.scss";

export default function Index(props) {
	// props.type = define o tipo do input
	// props.text = define o texto em cima do input
	// props.placeholder = define o placeholder do input

	return (
		<div className="input-main">
			<p className="input-text">{props.text}</p>
			<input type={props.type} className="default-input" placeholder={props.placeholder} />
		</div>
	);
}
