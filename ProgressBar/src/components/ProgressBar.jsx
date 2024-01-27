/* eslint-disable react/prop-types */
const ProgressBar = ({value}) => {
  return (
    <div className="progress">
        <span style={{color:value>50?'#fff':'black'}}>{value.toFixed()}%</span>
        <div 
        style={{width:`${value}%`}}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value.toFixed()}
        />
    </div>
  )
}

export default ProgressBar
