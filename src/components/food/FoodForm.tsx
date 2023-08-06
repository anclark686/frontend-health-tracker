import { useState, ChangeEvent, FormEvent } from "react";

const initialFormData = {
  name: "",
  amount: "",
  calories: 0,
  meal: "",
  date: new Date()
};

const FoodForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value)
    console.log(name)
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData)
  }
  return (
    <>
      <form action="submit" className="food-form" onSubmit={onFormSubmit}>
        <div className="input-item">
          <label htmlFor="name">Food:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            name="amount"
            id="amount"
            className="form-input"
            value={formData.amount}
            onChange={handleFormChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="calories">Calories:</label>
          <input
            type="text"
            name="calories"
            id="calories"
            className="form-input"
            value={formData.calories}
            onChange={handleFormChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="meal">Meal:</label>
          <select
            name="meal"
            id="meal"
            className="form-input"
            value={formData.meal}
            onChange={handleFormChange}
          >
            <option value="">--Select One--</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          <input type="submit" value="Add Food" />
        </div>
      </form>
    </>
  );
};

export default FoodForm;
