import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

// import test from "./test.svg";

export default function Price({
  price,
  discount,
  currency,
  // cleaning,
  // service,
  // checkin,
  // checkout,
  ...rest
}) {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      {/* <li className="price__list--item">
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </li> */}

      {/* <ListItem imageSrc={test} title="Hello World"> */}
      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      {/* <li className="price__list--item">
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </li> */}

      <ListItem>
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      {/* <li className="price__list--item">
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </li>

      <li className="price__list--item">
        <span>Дата вибуття:</span>
        <span>{checkout}</span>
      </li> */}

      <ListItem>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>

      <ListItem>
        <span>Дата вибуття:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
