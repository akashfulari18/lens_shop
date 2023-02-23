export default function Bullet({ text }) {
	return (
		<span
			style={{
				backgroundColor: "white",
				borderRadius: "100px",
				width: "30px",
				height: "30px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				margin: "5px",
			}}
		>
			{text}
		</span>
	);
}
