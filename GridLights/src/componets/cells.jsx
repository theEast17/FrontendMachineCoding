const Cells = ({filled,onClick,disabled,label}) => {
  return (
    <button type="button"
    aria-label={label}
    onClick={onClick}
    className={filled ?'cell cell-activated':'cell'}
    disabled={disabled}
    >
      {filled}
    </button>
  )
}

export default Cells
