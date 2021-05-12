import React, { useContext, useState, useRef } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={Details} />
        </Router>
      </div>
    </DataProvider>
  );
}

const Nav = () => {
  const linkStyle = { textDecoration: "none", color: "black" };

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle)
  };
  const styleMenu = { left: toggle ? 0 : "-100%" };
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">jersey.com</h3>
        <ul className="list-items" style={styleMenu}>
          <Link to="/" style={linkStyle}><li className="list-item">Home</li></Link>
          <Link to="/products" style={linkStyle}><li className="list-item">store</li></Link>
          <a href="#"><li className="list-item">About</li></a>
          <a href="#"><li className="list-item">Contacts</li></a>
          <a href="#"><li className="list-item">login / register</li></a>
          <li className="list-item menu"><i className="fa fa-times" onClick={toggleMenu}></i></li>

        </ul>
        <li className="list-item menu"><i className="fa fa-bars" onClick={toggleMenu}></i></li>
      </nav>
    </div>
  )
};

const products = [
  {
    id: 1,
    name: "Jersey 01",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-back-short.png?w=458&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  },
  {
    id: 2,
    name: "Jersey 02",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-back-short.png?w=458&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  },
  {
    id: 3,
    name: "Jersey 03",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-back-short.png?w=458&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  },
  {
    id: 4,
    name: "Jersey 04",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-back-short.png?w=458&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  },
  {
    id: 5,
    name: "Jersey 05",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-back-short.png?w=458&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  },
  {
    id: 6,
    name: "Jersey 06",
    images: ["https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i2.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-front-short.png?w=448&ssl=1",
      "https://i0.wp.com/jerseynmore.com/wp-content/uploads/2019/06/man-u-home-side-short2.png?w=433&ssl=1"],
    price: 250,
    description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    colors: ["blue", "black", "red", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 20
  }
]

const Products = () => {
  const [items, setItems] = useContext(DataContext);
  return (
    <div className="products">
      {
        items.map(item => <Product key={item.id} item={item} />)
      }
    </div>
  )
};

const Product = ({ item }) => {
  const [items, setItems] = useContext(DataContext);
  const linkStyle = { textDecoration: "none", color: "black" };
  return (
    <div className="card">
      <img src={item.images[0]} />
      <div className="box">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="price"><h4>${item.price}</h4></div>
        <Link to={`/products/${item.id}`} style={linkStyle}><button>more details</button></Link>
      </div>
    </div>
  )
};

const Details = () => {
  const { id } = useParams();
  const [items, setItems] = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();
  const zoomzoom = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  const details = items.filter(item => item.id == id);
  return (
    <div>
      {
        details.map(item => (
          <div className="details" key={item.id}>
            <div className="img-container" style={{ backgroundImage: `url(${item.images[index]})` }} onMouseMove={zoomzoom} ref={imgDiv}
              onMouseLeave={() => imgDiv.current.style.backgroundPosition = "center"}></div>
            <div className="box-details">
              <h2 title={item.name}>{item.name}</h2>
              <h3>${item.price}</h3>
              <p>{item.description}</p>
              <div className="colors">
                {
                  item.colors.map((color, index) => (
                    <button key={index} style={{ background: color }}></button>
                  ))
                }
              </div>
              <div className="sizes">
                {
                  item.sizes.map((size, index) => (
                    <button key={index}>{size}</button>
                  ))
                }
              </div>
              <div className="thumbs">
                {
                  item.images.map((img, index) => (
                    <img key={index} src={img}
                      onClick={() => setIndex(index)} />
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const Home = () => {

  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  )
}

const DataContext = React.createContext();

const DataProvider = (props) => {
  const [items, setItems] = useState(products);
  return (
    <DataContext.Provider value={[items, setItems]}>
      {props.children}
    </DataContext.Provider>
  )
}

export default App;

