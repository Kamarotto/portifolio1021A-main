import { Link } from 'react-router-dom';

type LinkProps = {
  url: string,
  texto: string
};

function LinkNav(props: LinkProps) {
  return (
    <Link to={props.url}>{props.texto}</Link>
  );
}

export default LinkNav;