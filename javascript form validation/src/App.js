import { useState} from "react";
import "./App.css";

function App() {
  const initialValues = { name: "", phone: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  //form validation
  const validate = (values) => {
    const errors = {};

    if(!(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(values.name))){
      errors.name="Only alphabets are allowed";
    }
    if(values.phone.length!==10){
      errors.phone="phone should contain exactly 10 digits"
    }else if(isNaN(values.phone)){
      errors.phone="Only number are allowed"
    }
  
    return errors;
  };

  return (
    <div className="container">
       {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter you name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.name}</p>

          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter you phone number"
              value={formValues.phone}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.phone}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;