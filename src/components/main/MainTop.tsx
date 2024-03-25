import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperInit from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IBanner } from "../../types/type";

export const MainTop = () => {
  const path = "./images";
  const [banneerList, setBannerList] = useState<IBanner[]>([]);
  // 마우스 오버가 되면 play 하기
  const swBanner = useRef<SwiperInit | null>(null);

  const swiperOption = {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    onInit: (swiper: SwiperInit | null) => {
      swBanner.current = swiper;
    },
  };

  const handelMouseEnterBanner = () => {
    // if (swBanner.current.swiper) {
    //   swBanner.current.swiper.autoplay.stop();
    // }
    if (swBanner.current) {
      swBanner.current.autoplay.stop();
    }
  };
  const handelMouseLeaveBanner = () => {
    // if (swBanner.current.swiper) {
    //   swBanner.current.swiper.autoplay.start();
    // }
    if (swBanner.current) {
      swBanner.current.autoplay.start();
    }
  };

  const getBannerList = () => {
    const jsonUrl = "./api/banner.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBannerList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBannerList();
    swBanner.current = new SwiperInit(".swBanner", swiperOption);
  }, []);
  return (
    <section className="main-top">
      <div className="main-banner">
        {/* <!-- start : 슬라이드 넣기 --> */}
        <div className="banner-wrap">
          <Swiper
            // ref={swBanner}
            className="swBanner"
            onMouseEnter={() => {
              handelMouseEnterBanner();
            }}
            onMouseLeave={() => {
              handelMouseLeaveBanner();
            }}
          >
            {banneerList.map(item => {
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
