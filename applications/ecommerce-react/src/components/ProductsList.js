import React from "react";

export default function ProductsList() {
  return (
    <section class="items">
      <ul>
        <li>
          <img src="imgs/ball.png" alt="" height="100" width="100" />
          <h3>Soccer ball</h3>
          <div>$44.00</div>
          <p>The best soccer ball ever!</p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="imgs/tube.png" alt="" height="100" width="100" />
          <h3>Tubing raft</h3>
          <div>$624.00</div>
          <p>Have some extreme fun being pulled in this raft!</p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="imgs/woodenSet.png" alt="" />
          <h3>Chess board and pieces</h3>
          <div>$499.00</div>
          <p>Hand-crafted from the finest Mahoganey wood</p>
          <button>Add To Cart</button>
        </li>
        <li>
          <img src="imgs/shirtCanada.png" alt="" />
          <h3>Team Canada soccer jersey</h3>
          <div>$591.00</div>
          <p>
            Display your national pride with this authentic Team Canada soccer
            jersey!
          </p>
          <button>Add To Cart</button>
        </li>
        <li>
          <img src="imgs/sunglass.png" alt="" />
          <h3>Goggles</h3>
          <div>$396.00</div>
          <p>Top-of-the-line goggles for the most extreme of watersports!</p>
          <button>Add To Cart</button>
        </li>
      </ul>
    </section>
  );
}
