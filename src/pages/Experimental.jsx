import "../components/Header/Header"
import Header from "../components/Header/Header";
import React, { useState, useEffect } from "react";
import { LINK_API, PUBLIC_KEY } from "../config";
import Image from "../components/Image/Image";
import "../global/global.css";
import ImageSkeleton from "../components/ImageSkeleton/ImageSkeleton";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from "react-router-dom";

const Experimental = (props) => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const api = LINK_API + '/topics/'+'experimental'+'/photos'+'?client_id=' + PUBLIC_KEY;;


  const fetchMoreData = () => {
    fetch(api, {
      method: "GET",
    })
      .then(resp => resp.json()).then(resp => { setData([...data, ...resp]); console.log(2) }).then(error => console.log(error));
  };
  useEffect(() => {

    fetch(api, {
      method: "GET",
    })
      .then(resp => resp.json()).then(resp => { setData(resp); console.log(11) }).then(error => console.log(11));


  }, []);
  return (
    <>
      <Header />
      <div className="parent-container">
        <div className="container-image">
          {data.length === 0 && <div className="container-skeleton"> <ImageSkeleton cards={6} /></div>}
          {data.length !== 0 && <InfiniteScroll className="scroll" dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={<ImageSkeleton cards={6} />}>
            {data.map((item, index) => (
              <>
                <Image item={item} />
              </>
            ))}
          </InfiniteScroll>}


        </div>


      </div>

    </>

  );
};

export default Experimental;