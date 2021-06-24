import Header from "./components/classComponents/Header.js";
import ProductCategories from "./components/classComponents/ProductCategories.js";
import ProductsList from "./components/ProductsList.js";
import Footer from "./components/Footer.js";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

function App() {
  return (
    <div className="container">
      <Header title="Sports Store" buttonText={getButtonText()} />
      <ProductCategories />
      <ProductsList />
      <Footer email="sports_store@store.com" phone="780-555-5556">
        <h4>Contact us</h4>
        <p>
          We've been in business since 1972, providing you with all your
          sporting needs!
        </p>
      </Footer>
    </div>
  );
}

export default App;
