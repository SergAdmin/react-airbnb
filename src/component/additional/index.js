import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Additional({ title, ...rest }) {
  return (
    <Box className="additional" shadow>
      <div className="additional__header">
        <Heading border>{title}</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({
  rules,
  cancellation,
  transportation,
  languages,
  offers,
  checkIn,
}) {
  return (
    <ul className="additional__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{cancellation}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span>{languages}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkIn}</span>
      </ListItem>
    </ul>
  );
}

//   guests, bedrooms, beds, baths
