import { useEffect, useRef, useState } from "react";
import { CardNews } from "../card/CardNews";
import SwiperInit from "swiper"; // 이름이 겹치므로 Swiper를 SwiperInit 으로 바꾸어서 import
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { ICard, INews } from "../../types/type";

export const MainBottom = () => {
  // 이미지 경로
  const path = "./images";
  // News 데이터 관리
  const [newsList, setNewsList] = useState<INews[]>([]);
  // Crew 데이터 관리
  const [crewNewsList, setCrewNewsList] = useState<INews[]>([]);
  // CardList 데이터 관리
  const [cardList, setCardList] = useState<ICard[]>([]);
  // CardSwiper 참조
  const cardSwiper = useRef<SwiperInit | null>(null);

  const getNewsList = () => {
    // 1. json 호출 하고 성공하면
    const jsonUrl = "./api/news.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setNewsList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCrewNewsList = () => {
    // Crew 데이터 출력
    const jsonUrl = "./api/crews.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setCrewNewsList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCardList = () => {
    const jsonUrl = "./api/cards.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setCardList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const swiperOption = {
    spaceBetween: 15,
    slidesPerView: 4,
    loop: true,
    onInit: (swiper: SwiperInit | null) => {
      cardSwiper.current = swiper;
    },
  };

  useEffect(() => {
    getNewsList();
    getCrewNewsList();
    getCardList();

    // 초기 로딩시 처리 필요
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
      if (cardSwiper.current?.destroyed) {
        cardSwiper.current = new SwiperInit(".swCards", swiperOption);
      }
    } else {
      if (cardSwiper.current) {
        cardSwiper.current.destroy();
      }
    }

    window.addEventListener("resize", function () {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024) {
        if (cardSwiper.current?.destroyed) {
          cardSwiper.current = new SwiperInit(".swCards", swiperOption);
        }
      } else {
        if (cardSwiper.current) {
          cardSwiper.current.destroy();
        }
      }
    });

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", function () {});
    };
  }, []);

  return (
    <section className="main-bottom">
      <div className="main-contents">
        <div className="content-wrap">
          <h3>NEW. 따끈따끈 새로 나온 글 🔥</h3>
          <div className="content-list news-list">
            {newsList.map(item => (
              <CardNews key={item.id} item={item} path={"./images"} />
            ))}
          </div>
        </div>
        <div className="content-ad">
          <a href="#"></a>
        </div>
        <div className="content-wrap">
          <h3>Editor’s Pick. 카카오브레인 크루를 소개합니다! 🏃🏻‍♀️🏃‍♂️🏃🏽</h3>
          <div className="content-list crew-list">
            {crewNewsList.map(item => (
              <CardNews key={item.id} item={item} path={"./images"} />
            ))}
          </div>
          <div className="bt-wrap">
            <button className="bt">더보기</button>
          </div>
        </div>
      </div>

      <div className="main-cards">
        <div className="main-cards-wrap">
          <h3>폴더 📁</h3>
          <div className="main-cards-slide">
            <Swiper className="swCards" {...swiperOption}>
              {cardList.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <a
                      href={item.link}
                      data-id={item.id}
                      className="main-card"
                      style={{
                        background: `url('${path}/${item.imgpath}') no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    >
                      <p className="main-card-cate">
                        {item.cardname} <span>{item.cardno}</span>
                      </p>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="bt-wrap">
            <a href="#" className="bt">
              폴더전체보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
