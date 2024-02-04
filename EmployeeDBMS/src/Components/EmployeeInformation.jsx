import { useGlobalContext } from "../Context/Context";

const EmployeeInformation = () => {
  const { data, selectedEmployeeId } = useGlobalContext();
  return (
    <div className="info">
      <span>Employee Information</span>
      <div className="employeeInfo">
        {data[selectedEmployeeId] ? (
          <div className="containerEmployee">
            <img
              src={
                data[selectedEmployeeId].imageUrl
                  ? data[selectedEmployeeId].imageUrl
                  : "https://www.bing.com/th?id=OIP.9vm7eDbnZS6Yy4ETUfEBAgAAAA&pid=3.1&cb=&w=300&h=300&p=0"
              }
              alt="img"
            />
            <h3>{`${data[selectedEmployeeId].firstName}  ${data[selectedEmployeeId].lastName}`}</h3>
            <p>{data[selectedEmployeeId].address}</p>
            <p>{data[selectedEmployeeId].email}</p>
            <p>{data[selectedEmployeeId].contactNumber}</p>
            <p>{data[selectedEmployeeId].DOB}</p>
          </div>
        ):
        <p style={{fontWeight:'600',textAlign:'center',marginTop:'40px',fontSize:'20px'}}>You can click Employee To show the details</p>
        }
      </div>
    </div>
  );
};

export default EmployeeInformation;
