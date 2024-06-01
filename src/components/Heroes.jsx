import React, { useEffect, useState } from "react";

const Heroes = () => {
  const [strHeroes, setStrHeroes] = useState([]);
  const [agiHeroes, setAgiHeroes] = useState([]);
  const [intHeroes, setIntHeroes] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);

  const [randomStrHero, setRandomStrHero] = useState(null);
  const [randomAgiHero, setRandomAgiHero] = useState(null);
  const [randomIntHero, setRandomIntHero] = useState(null);
  const [randomAllHero, setRandomAllHero] = useState(null);

  const getHeroAvatar = (heroName) => {
    return `https://dotarandom.vercel.app/_next/image?url=%2Fimg%2FAxe.png&w=3840&q=75`;
  };

  useEffect(() => {
    fetch("heroes.json")
      .then((response) => response.json())
      .then((data) => {
        const str = [];
        const agi = [];
        const int = [];
        const all = [];

        data.forEach((hero) => {
          switch (hero.primary_attr) {
            case "str":
              str.push(hero);
              break;
            case "agi":
              agi.push(hero);
              break;
            case "int":
              int.push(hero);
              break;
            case "all":
              all.push(hero);
              break;
            default:
              break;
          }
        });

        setStrHeroes(str);
        setAgiHeroes(agi);
        setIntHeroes(int);
        setAllHeroes(all);

        // Set random heroes
        setRandomStrHero(
          str.length > 0 ? str[Math.floor(Math.random() * str.length)] : null
        );
        setRandomAgiHero(
          agi.length > 0 ? agi[Math.floor(Math.random() * agi.length)] : null
        );
        setRandomIntHero(
          int.length > 0 ? int[Math.floor(Math.random() * int.length)] : null
        );
        setRandomAllHero(
          all.length > 0 ? all[Math.floor(Math.random() * all.length)] : null
        );
      })
      .catch((error) => console.error("Error fetching the heroes:", error));
  }, []);

  console.log("Strength Heroes:", strHeroes);

  return (
    <div>
      {/* <h2>Strength Heroes</h2>
      <ul>
        {strHeroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul> */}
      {randomStrHero && (
        <p>
          Random Strength Hero: {randomStrHero.localized_name}
          <img
            src={getHeroAvatar(randomStrHero.localized_name)}
            alt={randomStrHero.localized_name}
            style={{ width: "50px", height: "50px" }}
          />
        </p>
      )}

      {/* <h2>Agility Heroes</h2>
      <ul>
        {agiHeroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul> */}
      {randomAgiHero && (
        <p>Random Agility Hero: {randomAgiHero.localized_name}</p>
      )}

      {/* <h2>Intelligence Heroes</h2>
      <ul>
        {intHeroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul> */}
      {randomIntHero && (
        <p>Random Intelligence Hero: {randomIntHero.localized_name}</p>
      )}

      {/* <h2>All Attributes Heroes</h2>
      <ul>
        {allHeroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul> */}
      {randomAllHero && (
        <p>Random All Attributes Hero: {randomAllHero.localized_name}</p>
      )}
    </div>
  );
};

export default Heroes;
