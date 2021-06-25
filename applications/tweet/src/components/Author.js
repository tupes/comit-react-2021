export default function Author(props) {
  const { name, handle } = props;

  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}
