import "../components/Header/Header"
import Header from "../components/Header/Header";
import React, { useState, useEffect } from "react";
import { LINK_API, PUBLIC_KEY} from "../config";
import Image from "../components/Image/Image";
import "../global/global.css";
import ImageSkeleton from "../components/ImageSkeleton/ImageSkeleton";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import './PageStyles.css';

const ArchitectureInterior = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;
  const api = LINK_API + '/topics/architecture-interior/photos' + '?client_id=' + PUBLIC_KEY + '&per_page=' + itemsPerPage + '&page=' + currentPage;

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
  }, [currentPage, api]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Layout 
      title="Architecture & Interior"
      description="Discover stunning architectural photography and interior design inspiration from around the world."
    >
      <ImageGrid images={data} loading={loading} />
      
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
    </Layout>
  );
};

export default ArchitectureInterior;