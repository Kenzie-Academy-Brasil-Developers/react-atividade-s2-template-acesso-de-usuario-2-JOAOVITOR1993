import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Company = ({ members }) => {
  const { id } = useParams();

  const member = members.find((element) => {
    if (id === element.id) {
      return element;
    }
  });

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};
