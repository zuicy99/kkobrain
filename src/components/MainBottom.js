export const MainBottom = () => {
  return (
    <section class="main-bottom">
      <div class="main-contents">
        <div class="content-wrap">
          <h3>NEW. 따끈따끈 새로 나온 글 🔥</h3>
          <div class="content-list news-list">
            {/* <!-- JS Json 연동 --> */}
          </div>
        </div>
        <div class="content-ad">
          <a href="#"></a>
        </div>
        <div class="content-wrap">
          <h3>Editor’s Pick. 카카오브레인 크루를 소개합니다! 🏃🏻‍♀️🏃‍♂️🏃🏽</h3>
          <div class="content-list crew-list">
            {/* <!-- JS Json 연동 --> */}
          </div>

          <div class="bt-wrap">
            <button class="bt">더보기</button>
          </div>
        </div>
      </div>

      <div class="main-cards">
        <div class="main-cards-wrap">
          <h3>폴더 📁</h3>
          <div class="main-cards-slide">
            {/* <!-- Start 카드 슬라이드 --> */}
            <div class="swiper swCards">
              <div class="swiper-wrapper">{/* <!-- JS Json 연동 --> */}</div>
            </div>
            {/* <!-- End 카드 슬라이드 --> */}
          </div>

          <div class="bt-wrap">
            <a href="#" class="bt">
              폴더전체보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
