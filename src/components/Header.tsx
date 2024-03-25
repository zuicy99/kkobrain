import "../css/header/header.css";
import "../css/header/mbmenu.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import SwiperInit from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const Header = () => {
  // 스크롤 상태 여부
  const [isScroll, setIsScroll] = useState<boolean>(false);

  // 모바일 메뉴 참조
  const iconMore = useRef<HTMLAnchorElement | null>(null);
  const mbMenu = useRef<HTMLDivElement | null>(null);
  const mbInner = useRef<HTMLDivElement | null>(null);
  let isClick = true;
  // 모바일 메뉴 보이기 숨기를 적용
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect 에서 태그를 찾지 않고 useRef 를 활용
  const swLogTag = useRef<HTMLAnchorElement | null>(null);
  // swiper 를 위한 useRef
  const swHeaderLogo = useRef<SwiperInit | null>(null);

  const swiperOption = {
    modules: [EffectFade, Autoplay],
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
    onInit: (swiper: SwiperInit | null) => {
      swHeaderLogo.current = swiper;
    },
  };

  const handleMouseEnter = () => {
    // if (swHeaderLogo.current?.swiper) {
    //   swHeaderLogo.current?.swiper.autoplay.start();
    // }
    if (swHeaderLogo.current) {
      swHeaderLogo.current.autoplay.start();
    }
  };
  const handleMouseLeave = () => {
    // if (swHeaderLogo.current?.swiper) {
    //   swHeaderLogo.current?.swiper.autoplay.stop();
    //   // // 첫 번째 슬라이드로 강제로 이동시킨다.
    //   swHeaderLogo.current?.swiper.slideTo(1);
    // }
    if (swHeaderLogo.current) {
      swHeaderLogo.current.autoplay.stop();
      // // 첫 번째 슬라이드로 강제로 이동시킨다.
      swHeaderLogo.current.slideTo(1);
    }
  };

  // 반응형 메뉴
  const hanldeClickMore = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isClick === false) {
      return;
    }
    isClick = false;

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        // mbMenu.current.classList.remove("active");
        isClick = true;
      }, 500);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        isClick = true;
      }, 500);
    }
  };

  useEffect(() => {
    // console.log(swHeaderLogo.current.swiper.autoplay);
    // swHeaderLogo.current.swiper.autoplay.stop();
    swHeaderLogo.current = new SwiperInit(".swLogo", swiperOption);
    swHeaderLogo.current?.autoplay.stop();

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    });

    // 새로고침시 처리
    let scrollPositionY = window.scrollY;
    if (scrollPositionY > 0) {
      setIsScroll(true); // 스크롤바가 이동했다.
    } else {
      setIsScroll(false); // 스크롤바가 상단 위치했다.
    }

    // 스크롤이 되는 경우 체크
    window.addEventListener("scroll", function () {
      let scrollPositionY = window.scrollY;
      // console.log("스크롤", scrollPositionY);
      if (scrollPositionY > 0) {
        setIsScroll(true); // 스크롤바가 이동했다.
      } else {
        setIsScroll(false); // 스크롤바가 상단 위치했다.
      }
    });

    return () => {
      window.removeEventListener("resize", function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  return (
    <>
      <header className={isScroll ? "header header-b-line" : "header"}>
        <div className="inner space-between align-items-center">
          <a
            href="#"
            aria-label="카카오브레인 블로그"
            className="logo space-between"
            ref={swLogTag}
            onMouseEnter={() => {
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
          >
            <img
              src="images/etc/logo-kakao.png"
              alt="카카오브레인"
              className="logo-kakao"
            />
            {/* <!-- Start 로고 슬라이더 --> */}
            <Swiper
              className="swLogo"
              // ref={swHeaderLogo}
              // modules={[EffectFade, Autoplay]}
              // effect="fade"
              // speed={500}
              // autoplay={{
              //   delay: 200,
              //   disableOnInteraction: false,
              // }}
            >
              <SwiperSlide>
                <img src="./images/etc/logo-blog01.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog02.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog03.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog04.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog05.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog06.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog07.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog08.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/etc/logo-blog09.png" />
              </SwiperSlide>
            </Swiper>
            {/* <!-- End 로고 슬라이더 --> */}
          </a>

          <ul className="nav">
            <li>
              <a href="#" aria-label="카카오브레인 소식">
                소식
              </a>
            </li>
            <li>
              <a href="#" aria-label="카카오브레인 팀 & 크루">
                팀 & 크루
              </a>
            </li>
            <li>
              <a href="#" aria-label="카카오브레인 영입">
                영입
              </a>
            </li>
            <li className="mb-search">
              <a
                href="#"
                aria-label="카카오브레인 검색"
                className="icon-bt icon-search"
              >
                검색
              </a>
            </li>
            <li className="mb-more">
              <a
                href="#"
                aria-label="카카오브레인 반응형메뉴"
                className={
                  isOpen ? "icon-bt icon-more active" : "icon-bt icon-more"
                }
                ref={iconMore}
                onClick={event => {
                  hanldeClickMore(event);
                }}
              >
                메뉴
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className={isOpen ? "mb-menu active" : "mb-menu"} ref={mbMenu}>
        <div className={isOpen ? "mb-inner active" : "mb-inner"} ref={mbInner}>
          <ul className="mb-nav">
            <li>
              <a href="#" aria-label="카카오브레인 소식">
                소식
              </a>
            </li>
            <li>
              <a href="#" aria-label="카카오브레인 팀 & 크루">
                팀 & 크루
              </a>
            </li>
            <li>
              <a href="#" aria-label="카카오브레인 영입">
                영입
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
