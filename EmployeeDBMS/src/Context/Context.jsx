/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import employeeData from '../Data/data.json'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [data,setData]=useState(employeeData)
    const [showForm, setShowForm] = useState(false);
    const [selectedEmployeeId,setSelectedEmployeeId]=useState(null)

    const selectEmployee=(index)=>{
      setSelectedEmployeeId(index)
    }

    const toggleForm=()=>{
      setShowForm(!showForm)
    }

    const deleteEmployee = (id) => {
      setData(prevData => prevData.filter(employee => employee.id !== id));
  }


  return <AppContext.Provider value={{
    data,
    selectedEmployeeId,
    showForm,
    setData,
    toggleForm,
    setShowForm,
    selectEmployee,
    deleteEmployee
  }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider,useGlobalContext };
