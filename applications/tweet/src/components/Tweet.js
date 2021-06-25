import Avatar from "./Avatar.js";
import Message from "./Message.js";
import Author from "./Author.js";
import Time from "./Time.js";
import Buttons from "./Buttons.js";

export default function Tweet(props) {
  const { tweet } = props;

  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author name={tweet.author.name} handle={tweet.author.handle} />
        <Time time={tweet.timestamp} />
        <Message message={tweet.message} />
        <div className="buttons">
          <Buttons likes={tweet.likes} retweets={tweet.retweets} />
        </div>
      </div>
    </div>
  );
}
