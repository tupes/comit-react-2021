import moment from "moment";

export default function Time(props) {
  const timeString = moment(props.time).fromNow();

  return <span className="time">{timeString}</span>;
}
