import { useState } from "react";
import { useGlobalContext } from "../Context/Context";


const AddEmployee = () => {
    const {data,setData,setShowForm}=useGlobalContext()
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    imageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    DOB: "",
    salary: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    setData([...data, formData]);
  };

 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormClick=(event)=>{
    event.stopPropagation();
  }


  return (
    <form onSubmit={handleSubmit} onClick={handleFormClick}>
      <h3>Add new Employee</h3>
      <div className="gridInput">
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <input
        type="text"
        name="imageUrl"
        placeholder="imageUrl (optional)"
        value={formData.imageUrl}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact"
        value={formData.contactNumber}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="DOB"
        placeholder="date"
        value={formData.DOB}
        onChange={handleInputChange}
        required
      />
      <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
    </form>
  );
};

export default AddEmployee;
