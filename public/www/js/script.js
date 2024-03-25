// 로고 슬라이드
window.addEventListener("load", function () {
  // Logo Swiper
  const swHeaderLogo = new Swiper(".swLogo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
  });
  // 마우스 오버가 되면 play 하기
  const swLogTag = document.querySelector(".swLogo");
  swLogTag.addEventListener("mouseover", function () {
    swHeaderLogo.autoplay.start();
  });
  swLogTag.addEventListener("mouseout", function () {
    swHeaderLogo.autoplay.stop();
    // 첫 번째 슬라이드로 강제로 이동시킨다.
    swHeaderLogo.slideTo(1);
  });
  // 처음에는 멈춰둔다.
  swHeaderLogo.autoplay.stop();
});
// 메인 배너 슬라이드
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/banner.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      const result = makeHtmlTag(data);
      return result;
    })
    .then((result) => {
      // 3. swiper 적용
      makeSwiper();
    })
    .catch((err) => {
      console.log(err);
    });

  // 2. html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
        <div class="swiper-slide">
          <div class="banner-content" data-id="${item.id}" style="background: url('${path}/${item.imgpath}') no-repeat center; background-size: cover;">
            <a href="${item.link}"></a>
          </div>
        </div>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(".swBanner .swiper-wrapper");
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };
  // 3. swiper 생성 함수
  const makeSwiper = () => {
    // 배너 Swiper
    const swBanner = new Swiper(".swBanner", {
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // 마우스 오버가 되면 play 하기
    const swBannerTag = document.querySelector(".swBanner");
    swBannerTag.addEventListener("mouseover", function () {
      swBanner.autoplay.stop();
    });
    swBannerTag.addEventListener("mouseout", function () {
      swBanner.autoplay.start();
    });
  };
});
// header 메뉴  Script
// 윈도우 객체의 속성 onload 를 이용해서 리소스 로딩을 체크
// window.onload = function(){}
// 윈도우 객체의 메소드 addEventListener 를 이용해서 리소스
// 로딩을 체크
window.addEventListener("load", function () {
  const iconMore = document.querySelector(".icon-more");
  const mbMenu = document.querySelector(".mb-menu");
  const mbInner = document.querySelector(".mb-inner");
  //   iconMore.onclick = function (event) {
  //     // a 태그라면 웹브라우저 갱신됨. js 에 오작동
  //     event.preventDefault();
  //   });

  // 사용자 연속 버튼 클릭 막기 플래그
  // isClick 이 true 면 클릭 가능
  // isClicke 이 false 면 클릭 불가능
  let isClick = true;

  iconMore.addEventListener("click", function (event) {
    // a 태그라면 웹브라우저 갱신됨. js 에 오작동
    event.preventDefault();

    if (isClick === false) {
      return;
    }
    isClick = false;

    // 모바일 메뉴 보이기 숨기를 적용
    // mbMenu.classList.toggle("active");
    const isOpen = mbMenu.classList.contains("active");
    // 1. 모바일 메뉴가 안보이는 경우
    // : 먼저 배경이 보이고
    // : 잠시 뒤에 메뉴가 펼쳐진다.

    // 2. 모바일 메뉴가 보이는 경우
    // : 메뉴가 먼저 닫히고
    // : 배경이 사라진다.

    if (isOpen) {
      // 메뉴가 줄어들고
      mbInner.classList.remove("active");
      // 아이콘 이미지 원래대로
      iconMore.classList.remove("active");
      // 배경이 사라져야 한다.
      setTimeout(() => {
        mbMenu.classList.remove("active");
        isClick = true;
      }, 500);
    } else {
      // 배경이 보이고
      mbMenu.classList.add("active");
      // 메뉴가 펼쳐짐
      mbInner.classList.add("active");
      // 아이콘 교체
      iconMore.classList.add("active");

      setTimeout(() => {
        isClick = true;
      }, 500);
    }
  });

  // 큰 해상도에서는 모바일 메뉴가 안보인다.
  // 큰 해상도에서는 active 클래스가 제거되어야 한다.
  // 작은 해상도에서는 정상적으로 보이거나 숨겨져야 한다.
  // 그래서 해상도를 체크해서 기능을 실행하도록 해야 한다.
  // 1. 해상도를 체크하는 기능을 넣어야 합니다.
  window.addEventListener("resize", function () {
    console.log(window.innerWidth);

    if (window.innerWidth >= 1024) {
      mbInner.classList.remove("active");
      iconMore.classList.remove("active");
      mbMenu.classList.remove("active");
    }
  });
});

// news 데이터 출력
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/news.json";
  fetch(jsonUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      const result = makeHtmlTag(data);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  // 2. html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
      <a href="${item.link}" data-id="${item.id}" class="content-list-link">
        <div class="content-list-img">
          <div class="content-list-thumb" style="background: url('${path}/${item.imgpath}') no-repeat center; background-size: cover;"></div>
        </div>
        <div class="content-list-txt">
          <span class="content-list-cate" style="color:${item.txtcolor}">
            <img src="${path}/icon/${item.icon}" alt="크루" />
            ${item.category}
          </span>
          <h4 class="content-list-title">${item.title}</h4>
          <span class="content-list-date">${item.day}</span>
        </div>
      </a>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(".news-list");
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };
});
// Crew 데이터 출력
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/crews.json";
  fetch(jsonUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      const result = makeHtmlTag(data);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  // 2. html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
      <a href="${item.link}" data-id="${item.id}" class="content-list-link">
        <div class="content-list-img">
          <div class="content-list-thumb" style="background: url('${path}/${item.imgpath}') no-repeat center; background-size: cover;"></div>
        </div>
        <div class="content-list-txt">
          <span class="content-list-cate" style="color:${item.txtcolor}">
            <img src="${path}/icon/${item.icon}" alt="크루" />
            ${item.category}
          </span>
          <h4 class="content-list-title">${item.title}</h4>
          <span class="content-list-date">${item.day}</span>
        </div>
      </a>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(".crew-list");
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };
});

// Card 데이터 출력
window.addEventListener("load", function () {
  // 초기로딩시 처리
  // 화면의 너비를 보자
  let windowWidth = window.innerWidth;
  // Swiper 슬라이드
  let swCards = null;

  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/cards.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      // 자료를 기반으로 html 태그 생성
      const result = makeHtmlTag(data);
      return result;
    })
    .then((result) => {
      // 3. swiper 적용
      makeSwiper();
    })
    .catch((err) => {
      console.log(err);
    });

  // 2. html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      // console.log(item);
      const tempTag = `
      <div class="swiper-slide">
        <a href="${item.link}" data-id="${item.id}" class="main-card" style="background: url('${path}/${item.imgpath}') no-repeat center;
        background-size: cover;">
          <p class="main-card-cate">${item.cardname} <span>${item.cardno}</span></p>
        </a>
      </div>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(".swCards .swiper-wrapper");
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };
  // 3. swiper 생성 함수
  const makeSwiper = () => {
    // 화면 리사이징
    window.addEventListener("resize", function () {
      windowWidth = window.innerWidth;
      if (windowWidth > 1024) {
        // swiper 제거
        if (swCards !== null) {
          swCards.destroy();
        }
        swCards = null;
      } else {
        // swiper 실행
        // swCards 가 비어 있으면 한 번만 만들어라
        if (swCards === null) {
          swCards = new Swiper(".swCards", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 15,
          });
        }
      }
    });
  };
});
