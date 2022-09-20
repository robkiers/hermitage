import { useState } from "react";
import ReactTooltip from "react-tooltip";

function TempleLore() {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div>
      <h1>Lore</h1>
      <p>
        The libraries of the Hermitage are ancient, and where some are open to the Kaldorei and their allies, others are
        sealed away and can only be viewed on request by the dwellers of the Hermitage. These tomes contain information
        about Kalimdor, the pangaea as it was before the Sundering as well as the lands afterwards. There are raports on
        the different wars that have been waged as well as information on rituals and religious events of the Sisterhood
        and the Cenarion Circle.
      </p>
      <p>
        Some of these can be{" "}
        <span
          className="tooltip"
          data-tip="Do you or your guild need an adventure hook? Reach out to us and let's see what we can do. "
          onMouseEnter={() => showTooltip(true)}
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
        >
          viewed by outsiders <span className="eye"></span>
        </span>{" "}
        as well, but will need to be approved.
      </p>
      {tooltip && <ReactTooltip />}
      <p>
        Among some of the latest entries are some of the recent events that the people of the Hermitage were involved
        in, both before the War of Thorns and afterwards:
      </p>
      <ul className="lorelist">
        <li>
          <a href="https://www.argentarchives.org/node/55498?">Generic archives entries</a>
        </li>
        <li>
          <a href="http://robkiers.nl/war-of-opportunity/">War of Opportunity</a>
        </li>
        <li>
          <a href="https://www.argentarchives.org/node/120236">Summer Solstice</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=iaJH7bzgx9A">A view of Ashenvale</a>
        </li>
        <li>
          <a href="https://www.argentarchives.org/node/91062">Ashenvale Burns</a>
        </li>
      </ul>
    </div>
  );
}

export default TempleLore;
