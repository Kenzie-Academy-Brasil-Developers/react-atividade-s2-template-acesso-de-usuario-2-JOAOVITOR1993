import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Customer = ({ members }) => {
  const { id } = useParams();

  const member = members.find((element) => {
    if (id === element.id) {
      return element;
    }
  });

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};
