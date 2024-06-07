import React from 'react';

const MyComponent = ({ data }) => {
  const [shouldShowSearchTerm, setShouldShowSearchTerm] = React.useState(false);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {shouldShowSearchTerm && <p>Search Term: {item.searchTerm}</p>}
          {/* Display other properties like name, price, and image */}
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <img src={item.image} alt={item.name}/>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
