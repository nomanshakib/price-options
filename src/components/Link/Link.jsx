import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="font-semibold mr-2 px-2 hover:bg-cyan-500">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object,
}
export default Link;
