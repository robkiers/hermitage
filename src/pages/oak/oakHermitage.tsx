import logo from "../../assets/logo.png"

function OakHermitage() {
  return (
    <div className="">
      <h1>The Moonrise Hermitage</h1>
      <p>
        Though many Kaldorei are solitary in nature, they know that the lone
        wolf is a beast doomed to die. Strength in unity. Unity through faith.
        This has always been our way. That is how we repelled the Burning Legion
        twice. That is how we endured the Long Vigil, and fulfilled our Duty for
        ten millennia.
      </p>
      <p>
        The Moonrise Hermitage began as a secluded Sisterhood cloister, where
        sisters that had suffered injury of body or mind – trauma or loss -
        could come for rest, healing, tranquility, in a place where this unity
        was emphasized. Meditation, the purity of the hunt, seeing nature in
        work in deep communion with the sisters and the Goddess… this was life
        at the Hermitage for the first seven thousand years of its existence.
      </p>
      <p>
        Then came the Burning Legion again. The sanctity of Ashenvale disturbed
        by alien invaders, both demons and orcs, the Kaldorei people reel from
        this unrelenting assault on their ancient ways of life. To help the many
        wounded and destitute, the Sisterhood at the Hermitage opened their
        doors. They provide healing, guidance and protection, without asking
        anything in return. <br />
        This philosophy, seeing the unity and well-being of the Kaldorei and the
        Goddess’ Garden as the sole purpose and its own reward, has inspired
        many of the refugees and mourners in the Hermitage’s care to remain and
        help others, as they themselves were shown kindness and kinship in their
        darkest hour.
      </p>
      <p>
        Offering their crafts and skills in solidarity with their sisters and
        brothers, the Kaldorei at the Hermitage come from all stretches of the
        road of life. Elders sit in the tranquil boughs, sharing their hard-won
        wisdom and the experience of ages with younglings who have lost friends,
        families and more. Children play amidst the flowers, each caring for the
        younger, all learning the ways of the Hunt from the adults. Healers
        caring for the wounded, druids tending the twilight groves of Ashenvale.
        Warriors, always too few, form a militia, the Grove Blades to safeguard
        their kin and the lands they hold sacred.
      </p>
      <div className="flex">
        <span>
          <p>
            No matter what wounds or sorrows they seek relief from, or how they
            found their way here, to all of us, the Moonrise Hermitage is a
            symbol, an icon and a message of hope that alights the darkest night
            as does the Moon herself: By the Goddess’ grace, there is sanctuary
            still in a war-torn world.
          </p>
        </span>
        <img className="oakLogo" src={logo} alt="hermitage logo" />
      </div>
    </div>
  );
}

export default OakHermitage;
