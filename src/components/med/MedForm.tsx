import { useState, ChangeEvent } from "react";

const initialFormData = {
  name: ""
}

const MedForm: () => JSX.Element = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

  }

  const onFormSubmit = () => {

  }
  return (
    <>
      <form action="submit" className="med-form" onSubmit={onFormSubmit}>
        <div className="input-item">
          <label htmlFor="name"></label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="form-input" 
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>
      </form>
    </>
  );
};

export default MedForm;