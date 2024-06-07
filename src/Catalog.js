import React from 'react';

function Catalog ({elegante}) {

    return (
        <div className="products">
            {elegante.map((element=> {
                const {id,name, searchTerm, price, image} = element;
                console.log(element)
return (<div className="product-card" key={id} >
<p>{id}</p>
<img src={image} alt="cloth" width="130px" height="150px" />

<div className="product-info">
<p>{name}</p>
<p>{searchTerm}</p>
<p>{price}</p>
</div>
</div>
)

            }))}
        </div>
    )
}







export default Catalog;