import { Fragment } from "react";

import Heading from "../heading";

import Box from "../box";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box className="nearby" shadow>
      <div className="nearby__block">
        <Heading border>Пам'ятки поблизу</Heading>

        <div className="nearby__list">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              {/* <div>id</div> */}
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul>
      <li>
        <div className="nearby__sub">
          <a href={link}>{name}</a>
        </div>
      </li>
    </ul>
  );
}
