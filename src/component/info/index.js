import "./index.css";

export default function Info({ ...rest }) {
  return <List {...rest} />;
}

function List({ title, src, response_rate, response_time, info, phone }) {
  return (
    <div>
      <div className="title">
        <img src={src} alt="" className="avatar" />

        <div className="title__sub">
          <h1 className="title__text">Господар - {title}</h1>
          <div className="title__sub--block">
            <span className="title__sub--value">{phone} </span>
            <span className="title__sub--value">{response_time}</span>
            <span className="title__sub--value">{response_rate} %</span>
          </div>
        </div>
      </div>

      <span className="title__sub--value"> {info}</span>
    </div>
  );
}
