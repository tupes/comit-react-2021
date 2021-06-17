import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <h4>Contact us</h4>
      <ul>
        <li>
          <a href="mailto:sportsstore@store.com">{props.email}</a>
        </li>
        <li>
          <a href="tel:+01-780-555-5555">{props.phone}</a>
        </li>
      </ul>
    </footer>
  );
}
