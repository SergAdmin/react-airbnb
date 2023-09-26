import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

import airportShuttle from "./airportShuttle.svg";
import childFriendly from "./childFriendly.svg";
import conciergeService from "./conciergeService.svg";
import freeBreakfast from "./freeBreakfast.svg";

import freeWiFi from "./freeWiFi.svg";
import gym from "./gym.svg";
import parking from "./parking.svg";
import petsAllowed from "./petsAllowed.svg";

import pool from "./pool.svg";
import roomService from "./roomService.svg";

export default function Property({ title, ...rest }) {
  return (
    <Box className="flexibility" shadow>
      <div className="flexibility__header">
        <Heading border>{title}</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="flexibility__list">
      <ListItem imageSrc={pool} hide={hasPool}>
        <span>Басейн</span>
      </ListItem>

      <ListItem imageSrc={gym} hide={hasGym}>
        <span>Спортивний зал</span>
      </ListItem>

      <ListItem imageSrc={freeBreakfast} hide={hasFreeBreakfast}>
        <span>Безкоштовний сніданок</span>
      </ListItem>

      <ListItem imageSrc={freeWiFi} hide={hasFreeWiFi}>
        <span>Безкоштовний Wi-Fi</span>
      </ListItem>

      <ListItem imageSrc={parking} hide={hasParking}>
        <span>Безкоштовний вуличний паркінг</span>
      </ListItem>

      <ListItem imageSrc={petsAllowed} hide={hasPetsAllowed}>
        <span>Дозволено розміщення з домашніми тваринами</span>
      </ListItem>

      <ListItem imageSrc={airportShuttle} hide={hasAirportShuttle}>
        <span>Трансфер до/з аеропорту</span>
      </ListItem>

      <ListItem imageSrc={conciergeService} hide={hasConciergeService}>
        <span>Консьєрж-сервіс</span>
      </ListItem>

      <ListItem imageSrc={roomService} hide={hasRoomService}>
        <span>Обслуговування номерів</span>
      </ListItem>

      <ListItem imageSrc={childFriendly} hide={hasChildFriendly}>
        <span>Підходить для дітей</span>
      </ListItem>
    </ul>
  );
}

//   guests, bedrooms, beds, baths
