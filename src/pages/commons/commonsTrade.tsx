import { useState } from "react";
import ReactTooltip from "react-tooltip";

function CommonsTrade() {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div>
      <h1>Trade and Crafts</h1>
      <p>
        The Moonrise Hermitage is primarily made up out of simpler folk and focusses beside the healing of the injured
        and the lost, on their crafts to help benefit the Kaldorei people. It is a great change from before the second
        invasion of the Legion, where they are actively reaching out to trade in this new world.
      </p>
      <p>
        The primary product of the Moonrise grounds are its wines, which are an easy good to trade. But the Hermitage
        also boast a superb alchemy laboratory and several alchemists that can produce potions and elixirs, though this
        is more done to order and to fit the situation. The same goes for the volumes of lore that are held in the
        libraries of the Hermitage which they sometimes offer access to outlanders as well.
      </p>
      <h1>Wine</h1>
      <h2>Moonglow</h2>
      <p>
        Moonglow is a classic for night Kaldorei festivals and has recently been produced and sold to be carried around
        the world. The liquid itself glows with the blue hue of the moon well and it carries a strong alcohol content.
        The flavours are natural with hints of floral herbs and blueberries. The liquor is only truely made during the
        Lunar Festival and thus gets more rare as the year progresses.
      </p>
      <h2>Moonrise White</h2>
      <p>
        Moonrise is a dry, white wine that wouldn't be found outside of Ashenvale until now. Previously, the berries
        were picked by hand from bushes and squeezed into very few bottles, of which a number still exist. Now, they
        have been encouraged to grow in larger numbers to produce a line of polite, aromatic white wine with a
        tell-tale, different liquid texture on the tongue. It pairs well with fish and fruits, which are found in
        abundance in Ashenvale.
      </p>
      <h2>Sunset Red</h2>
      <p>
        Sunset is a robust red wine, unlike other brands that seek to follow in the footsteps of Dalaran Red. It offers
        a semblance of maturity in each sip. Ideally, each bottle is served with a small helping of scented earth root
        that is with the berries in every step of the wine-making process. It pairs best with the meat of a good hunt.
      </p>
      <h2>Snowshade's Reserve</h2>
      <p>
        Snowshade's Reserve is a collective term for a number of different alcoholic drinks. Snowshade's reserve comes
        only in bottles, which have a simple label with only three things on it: a date, a batch number and a symbol.
        Most common is an Kaldorei whiskey, a strong alcohol with the flavour of several local berries (Moonberry and
        Rasberry) mixed with grains (Wheat and Rye). But the flavours do differ per batch, and those years ending with 7
        are known to be of exceeding quality.
      </p>
      <h1>Alchemy</h1>
      <p>
        The alchemists of the Hermitage can brew many potions and elixirs. It has a most excellent laboratory where they
        can work on distilling and producing the potions that are required. Over the years they have gained a lot of
        experience with treating diseases and poisons caused by opposing alchemists such as the Undead or Goblins.
      </p>
      <p>
        The alchemists can provide but reach out first so that the potions can be made to order. Most situations need a
        different solution
      </p>
      <h1>Lore</h1>
      <p>
        The libraries of the Hermitage are extensive and the more impressive tomes are sealed in the Temple. Though the
        dwellers of the Hermitage are always eager to help, they approach this subject with care and deliberation before
        they can be{" "}
        <span
          className="tooltip"
          data-tip="Do you or your guild need an adventure hook? Reach out to us and let's see what we can do. "
          onMouseEnter={() => showTooltip(true)}
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
        >
          viewed by outsiders <div className="eye"></div>
        </span>
        .{tooltip && <ReactTooltip />}
      </p>
    </div>
  );
}

export default CommonsTrade;
