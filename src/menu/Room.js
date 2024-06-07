import { useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css'

function Room() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    return (
      <div>  
    

      </div>
    )
    

  }
  
  

<div>



</div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Room />);





export default Room;