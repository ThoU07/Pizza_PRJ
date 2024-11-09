// PizzaMenu.jsx
import React from 'react';
import '../styles/Menu.css';
const PizzaMenu = () => {
  const pizzas = [
    { name: 'Pepperoni', description: 'Classic pepperoni with mozzarella cheese.' },
    { name: 'Margherita', description: 'Tomato, basil, and fresh mozzarella.' },
    { name: 'Veggie', description: 'Loaded with bell peppers, olives, and mushrooms.' },
  ];

  return (
    <section className="pizza-menu">
      <h2>Our Pizzas</h2>
      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <div key={index} className="pizza-item">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PizzaMenu;
