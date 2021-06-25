import ReactDOM from "react-dom";
import "./index.css";
import Tweet from "./components/Tweet.js";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 4,
  timestamp: "2016-07-30 21:24:37",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
