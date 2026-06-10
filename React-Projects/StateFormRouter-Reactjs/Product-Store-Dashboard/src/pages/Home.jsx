import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Mini Product Store</h1>

      <p>
        Learn React Hooks, Forms,
        API Fetching, and React Router.
      </p>

      <Link to="/products">
        <button>
          Explore Products
        </button>
      </Link>
    </div>
  );
}

export default Home;