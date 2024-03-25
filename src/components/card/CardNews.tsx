// 뉴스 및 새소식에 보여줄 컴포넌트
import { INews } from "../../types/type";

type Props = {
  item: INews;
  path: string;
};
export const CardNews = ({ item, path }: Props) => {
  return (
    <a href={item.link} data-id={item.id} className="content-list-link">
      <div className="content-list-img">
        <div
          className="content-list-thumb"
          style={{
            background: `url('${path}/${item.imgpath}') no-repeat center`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="content-list-txt">
        <span
          className="content-list-cate"
          style={{ color: `${item.txtcolor}` }}
        >
          <img src={`${path}/icon/${item.icon}`} alt="크루" />
          {item.category}
        </span>
        <h4 className="content-list-title">{item.title}</h4>
        <span className="content-list-date">{item.day}</span>
      </div>
    </a>
  );
};
