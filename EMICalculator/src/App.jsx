import { useEffect, useState } from "react";
import constant from "./utils/constants";
import { numberWithCommas } from "./utils/config";

const App = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [tenure, setTenure] = useState(12);
  const calculateEMI = (downPayment) => {
    if (!cost) return;
    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;
    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
   
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  const updateEMI = (e) => {
    if (!cost) return;
    const payment = Number(e.target.value);
    setDownPayment(payment);

    const emi = calculateEMI(payment);
    setEmi(emi);
  };
  const updateDownPayment = (e) => {
    if (!cost) return;
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }
    const emi = calculateEMI(downPayment);
    setEmi(emi);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenure]);

  const totalDownPayment=()=>{
    return numberWithCommas((Number(downPayment)+(cost-downPayment) * (fee/100)).toFixed(0))
  }

  const totalLoanAmount=()=>{
    return numberWithCommas( emi ? (Number(emi*tenure)).toFixed(0) : '0')
  }

  return (
    <div className="EmiContainer">
      <h1 style={{ textAlign: "center", color: "blue" }}>EMI Calculator</h1>

      <p className="EmiHeader">Total Cost Of Assets</p>
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <p className="EmiHeader">Interest Rate (In %)</p>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />

      <p className="EmiHeader">Processing Fee (In %)</p>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <p className="EmiHeader">Down Payment</p>
      <p className="EmiHeader" style={{ textDecoration: "underline" }}>
        Total Down Payment  - {totalDownPayment()}
      </p>
      <input
        type="range"
        value={downPayment}
        onChange={updateEMI}
        min={0}
        max={cost}
      />
      <div className="lables">
        <label>{numberWithCommas(downPayment)}</label>
        <label>{numberWithCommas(cost)}</label>
      </div>

      <p className="EmiHeader">Loan Per Month</p>
      <p className="EmiHeader" style={{ textDecoration: "underline" }}>
        Total Loan Amount - {totalLoanAmount()}
      </p>
      <input
        type="range"
        value={emi}
        onChange={updateDownPayment}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />
      <div className="lables">
        <label>{numberWithCommas(calculateEMI(cost))}</label>
        <label>{numberWithCommas(emi)}</label>
        <label>{numberWithCommas(calculateEMI(0))}</label>
      </div>

      <p className="EmiHeader">Tenure</p>
      <div className="tenure">
        {constant.map((t, index) => {
          return (
            <button
              key={index}
              className={`tenureBtn ${tenure === t ? "active" : ""}  `}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
