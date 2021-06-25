function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

export default function Buttons(props) {
  const { retweets, likes } = props;

  return (
    <>
      <i className="fa fa-reply reply-button" />

      <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(retweets)}
      </span>

      <span className="like-button">
        <i className="fa fa-heart" />
        {likes > 0 && <span className="like-count">{likes} </span>}
      </span>
      <i className="fa fa-ellipsis-h more-options-button" />
    </>
  );
}
