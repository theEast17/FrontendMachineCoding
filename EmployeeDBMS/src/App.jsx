import { useGlobalContext } from "./Context/Context";
import EmployeeDetails from "./Components/EmployeeDetails";
import EmployeeInformation from "./Components/EmployeeInformation";
import AddEmployee from "./Components/AddEmployee";

const App = () => {
  const { data, toggleForm, showForm, setShowForm } = useGlobalContext();

  return (
    <main>
      <header className="employeeHeader">
        <h1>Employee Database Management System</h1>
        <button onClick={toggleForm}>Add Employee</button>
      </header>

      {data.length > 0 ? (
        <section className="employeeDetails">
          <>
            <EmployeeDetails />
            <EmployeeInformation />
          </>
        </section>
      ) : (
        <h2 style={{color:'red',textAlign:'center',marginTop:'20px'}}>Employee Table is Empty...!</h2>
      )}

      <section
        className={`${showForm ? "formPosition" : ""} `}
        onClick={() => setShowForm(false)}
      >
        {showForm && <AddEmployee />}
      </section>
    </main>
  );
};

export default App;
