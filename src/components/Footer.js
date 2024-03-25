import "../css/footer/footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="inner space-between">
          <div className="footer-info">
            <a href="#" className="footer-info-logo">
              <img src="images/etc/logo-kakao-footer.png" alt="" />
            </a>
            <p className="footer-info-txt">카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다. AI 없이는 상상할 수 없는 세상을 만들기 위해선 생각하지 못한 많은 물음이 필요합니다. 세상을 변화시킬 수 있는 새로운 물음을 던질 크루를 기다립니다.</p>
            <a href="#" className="footer-info-link">
              지원하러 가기
            </a>
          </div>

          <div className="footer-sitemap">
            <ul>
              <li>
                <span>정보</span>
              </li>
              <li>
                <a href="#">영입페이지</a>
              </li>
              <li>
                <a href="#">이메일무단수집거부</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">오시는길</a>
              </li>
            </ul>

            <ul>
              <li>
                <span>문의</span>
              </li>
              <li>
                <a href="#">영입</a>
              </li>
              <li>
                <a href="#">pr</a>
              </li>
              <li>
                <a href="#">마케팅∙사업제휴</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="inner">
          <p className="copy">Kakao Brain Corp. @ All rights reserved.</p>

          <ul className="footer-sns">
            <li>
              <a href="#">
                <i className="xi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="xi-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="xi-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="xi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
