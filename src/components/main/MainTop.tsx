import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperInit from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IBanner } from "../../types/type";
import axios, { AxiosResponse } from "axios";

export const MainTop = () => {
  const path = "./images";
  const [banneerList, setBannerList] = useState<IBanner[]>([]);
  // 마우스 오버가 되면 play 하기
  const swBanner = useRef<SwiperInit | null>(null);

  const swiperOption = {
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    onInit: (swiper: SwiperInit | null) => {
      // useRef 를 Swiper 보관용으로
      swBanner.current = swiper;
      // console.log(swBanner.current)
    },
  };

  const handelMouseEnterBanner = () => {
    swBanner.current?.autoplay.stop();
  };
  const handelMouseLeaveBanner = () => {
    swBanner.current?.autoplay.start();
  };

  const getBannerList = () => {
    const jsonUrl = "./api/banner.json";
    // fetch(jsonUrl)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setBannerList(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // axios 는 가져온 자료를 data 속성에 담아둠.
    axios
      .get<IBanner[]>(jsonUrl)
      .then((response: AxiosResponse<IBanner[], any>) =>
        setBannerList(response.data),
      )
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getBannerList();
  }, []);
  return (
    <section className="main-top">
      <div className="main-banner">
        {/* <!-- start : 슬라이드 넣기 --> */}
        <div
          className="banner-wrap"
          onMouseEnter={() => {
            handelMouseEnterBanner();
          }}
          onMouseLeave={() => {
            handelMouseLeaveBanner();
          }}
        >
          <Swiper {...swiperOption} className="swBanner">
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
