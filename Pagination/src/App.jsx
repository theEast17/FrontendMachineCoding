import { useState, useEffect } from "react";


const App = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [dataOnOnePage, setDataOnOnePage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [allButtons, setAllButtons] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();

        if (data && data.products) {
          setData(data.products);
          const totalPages = Math.ceil(data.products.length / dataOnOnePage);
          setAllButtons(Array(totalPages).fill(null).map((_, index) => index + 1));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [dataOnOnePage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < allButtons.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {data.length > 0 && (
        <div className="container">
          {data.slice(currentPage * dataOnOnePage, (currentPage + 1) * dataOnOnePage).map((item) => (
            <div key={item.id} className="card">
              <h3 style={{ textAlign: "center" }}>{item.title}</h3>
              <img src={item.images[0]} alt="productImage" />
              <p>{item.description}</p>
              <p style={{ fontWeight: "700" }}>${item.price}</p>
            </div>
          ))}
        </div>
      )}

      {data.length > 10 && (
        <div className="pagination">
          <span className={`pagination-button ${currentPage ? '':'pagination_disable'}`} onClick={handlePrevious} style={{background:'none',fontSize:'30px'}}>◀️</span>
          {allButtons.map((button, index) => (
            <span
              key={index}
              className={`pagination-button ${index === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(index)}
            >
              {button}
            </span>
          ))}
          <span className={`pagination-button ${currentPage===allButtons.length-1   ? 'pagination_disable': ''}`} onClick={handleNext} style={{background:'none',fontSize:'30px'}}>▶️</span>
        </div>
      )}
    </>
  );
};

export default App;
