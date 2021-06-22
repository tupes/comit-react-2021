import React from "react";

export default function Footer(props) {
  const children = React.Children.toArray(props.children);

  return (
    <footer>
      {children[0]}
      <ul>
        <li>
          <a href="mailto:sportsstore@store.com">{props.email}</a>
        </li>
        <li>
          <a href="tel:+01-780-555-5555">{props.phone}</a>
        </li>
      </ul>
      {children[1]}
    </footer>
  );
}
