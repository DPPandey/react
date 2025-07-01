import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
  return (
    <div className="header">
    <div className="logo-container"> 
      <img className="logo"
      
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHk0JcKN9XtpjPO5igfmQjj2ZRTNgV7kGOAA&s"></img>
    </div>
    <div className="nav-items">
      <ul>
       <li>Home</li>
       <li>About Us</li>
       <li>Contact Us</li>
       <li>Card</li>

      </ul>
    </div>
    </div> 
  
);
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-button">Search</button>
      </div>

      <div className="restaurant-list">
        <Restaurant
          name="The Food Villa"
          image="https://images.unsplash.com/photo-1556742205-e10c9486e506?w=600&auto=format&fit=crop&q=60"
        />
        <Restaurant
          name="Spicy Treats"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60"
        />
        <Restaurant
          name="Urban Bites"
          image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&auto=format&fit=crop&q=60"
        />
        <Restaurant
          name="Classic Dine"
          image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=60"
        />
      </div>
    </div>
  );
};

const Restaurant = ({ name, image }) => (
  <div className="restaurant-card">
    <img className="restaurant-image" src={image} alt={name} />
    <h2>{name}</h2>
    <h4>Cuisine: Italian, Continental</h4>
    <h4>⭐ 4.5 stars</h4>
    <h4>₹500 for two</h4>
  </div>
);


const AppLayout=()=>{
  return (
      <div className="app">
         <Header />
         <Body /> 
         </div>
  
);
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);