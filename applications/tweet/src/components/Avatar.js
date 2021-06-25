export default function Avatar(props) {
  return (
    <img
      src={`https://www.gravatar.com/avatar/${props.hash}`}
      alt="avatar"
      className="avatar"
    />
  );
}
