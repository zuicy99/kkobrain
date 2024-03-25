import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const MainTop = () => {
  const path = "./images";
  const [banneerList, setBannerList] = useState([]);
  // 마우스 오버가 되면 play 하기
  const swBanner = useRef(null);
  const handelMouseEnterBanner = () => {
    if (swBanner.current.swiper) {
      swBanner.current.swiper.autoplay.stop();
    }
  };
  const handelMouseLeaveBanner = () => {
    if (swBanner.current.swiper) {
      swBanner.current.swiper.autoplay.start();
    }
  };

  const getBannerList = () => {
    const jsonUrl = "./api/banner.json";
    fetch(jsonUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBannerList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBannerList();
  }, []);
  return (
    <section className="main-top">
      <div className="main-banner">
        {/* <!-- start : 슬라이드 넣기 --> */}
        <div className="banner-wrap">
          <Swiper
            ref={swBanner}
            className="swBanner"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            onMouseEnter={() => {
              handelMouseEnterBanner();
            }}
            onMouseLeave={() => {
              handelMouseLeaveBanner();
            }}
          >
            {banneerList.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="banner-content"
                    data-id={item.id}
                    style={{
                      background: `url('${path}/${item.imgpath}') no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  >
                    <a href={item.link}></a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper swBanner">
            <div className="swiper-wrapper">{/* <!-- JS Json 연동 --> */}</div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* <!-- end : 슬라이드 넣기 --> */}
      </div>

      <div className="main-event">
        <a href="#"></a>
      </div>
    </section>
  );
};
