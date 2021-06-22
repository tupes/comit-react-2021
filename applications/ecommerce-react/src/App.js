import Header from "./components/HeaderClass.js";
import ProductCategories from "./components/ProductCategories.js";
import ProductsList from "./components/ProductsList.js";
import Footer from "./components/Footer.js";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

function App() {
  const selectedCategory = "soccer";

  return (
    <div className="container">
      <Header title="Sports Store" buttonText={getButtonText()} />
      <ProductCategories selectedCategory={selectedCategory} />
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
