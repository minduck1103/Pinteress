import "../components/Header/Header"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { LINK_API, PUBLIC_KEY, GET_RANDOM } from "../config";
import Image from "../components/Image/Image";
import "../global/global.css";
import ImageSkeleton from "../components/ImageSkeleton/ImageSkeleton";
import { useParams } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;
  const api = LINK_API + '/' + GET_RANDOM + '?client_id=' + PUBLIC_KEY + '&count=' + itemsPerPage;

  const fetchData = (page) => {
    setLoading(true);
    fetch(api, {
      method: "GET",
    })
      .then(resp => resp.json())
      .then(resp => {
        setData(resp);
        setTotalPages(Math.ceil(resp.length / itemsPerPage));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="hero-section">
        <h1>Discover Beautiful Images</h1>
        <p>Explore a curated collection of stunning photographs from around the world</p>
      </div>
      
      <main className="main-content">
        <div className="parent-container">
          {loading ? (
            <div className="container-skeleton">
              <ImageSkeleton cards={6} />
            </div>
          ) : (
            <div className="image-grid">
              {data.map((item, index) => (
                <Image key={index} item={item} />
              ))}
            </div>
          )}
        </div>

        {!loading && (
          <div className="pagination-container">
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
              >
                Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;