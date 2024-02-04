import { useGlobalContext } from "../Context/Context";

const EmployeeDetails = () => {
  const { data, selectEmployee, deleteEmployee } = useGlobalContext();

  return (
    <div className="list">
      <span>Employee List</span>
      <div className="employeeName">
        {data.map((employee, index) => {
          return (
            <div
              key={index}
              className="employeeBtn"
              onClick={() => selectEmployee(index)}
            >
              <p>{`${employee.firstName} ${employee.lastName}`}</p>
              <p onClick={() => deleteEmployee(employee.id)}>❌</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeDetails;
