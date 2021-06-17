import Header from "./components/Header.js";
import ProductCategories from "./components/ProductCategories.js";
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
      <Footer email="sports_store@store.com" phone="780-555-5556" />
    </div>
  );
}

export default App;
