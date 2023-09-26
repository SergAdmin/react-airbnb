import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

import guests_svg from "./guests.svg";
import bedrooms_svg from "./bedrooms.svg";
import beds_svg from "./beds.svg";
import baths_svg from "./baths.svg";

export default function Property({ title, ...rest }) {
  return (
    <Box className="property" shadow>
      <div className="property__header">
        <Heading>{title}</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property__list">
      <ListItem imageSrc={guests_svg}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedrooms_svg}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={beds_svg}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={baths_svg}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}

//   guests, bedrooms, beds, baths
