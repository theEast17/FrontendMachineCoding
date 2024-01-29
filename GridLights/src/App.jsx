import { useState } from "react";
import Cells from "./componets/cells";

const App = () => {
  const [order, setOrder] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const activatedCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivatedCell();
    }
  };
  const deactivatedCell = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((currentOrder) => {
        const newOrder = currentOrder.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cells
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activatedCells(index)}
              disabled={order.includes(index)}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
};

export default App;
