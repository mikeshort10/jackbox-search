import { useState } from "react";
import { games, Tag, tags } from "../data";
import styles from "../styles/Home.module.css";

type PackFilterProps = {
  isSelected: boolean;
  index: number;
  handleChange: () => void;
};

const PackFilter = ({ isSelected, index, handleChange }: PackFilterProps) => (
  <label className={styles["checkbox-label"]}>
    <input type="checkbox" checked={isSelected} onChange={handleChange} />
    Pack {index + 1}
  </label>
);

export default function Home() {
  const [term, setTerm] = useState("");
  const [players, setPlayers] = useState<number>();
  const [allowAudience, setAllowAudience] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Record<Tag, boolean>>(
    Object.keys(tags).reduce(
      (acc, key) => ({ ...acc, [key as Tag]: false }),
      {}
    ) as Record<Tag, boolean>
  );

  const [selectedPacks, setSelectedPacks] = useState(
    Array(8)
      .fill(null)
      .map((_, i) => true)
  );
  const filterByTags = Object.values(selectedTags).some((x) => x);

  const options = games
    .filter(({ title }) =>
      term.split(" ").some((term) => new RegExp(term, "i").test(title))
    )
    .filter(({ minPlayers }) => players == null || minPlayers <= players)
    .filter(
      ({ maxPlayers, hasAudience }) =>
        players == null ||
        (allowAudience === true && hasAudience) ||
        maxPlayers >= players
    )
    .filter(({ tags }) => {
      return (
        filterByTags === false ||
        Object.keys(tags ?? {}).some((tag) => selectedTags[tag as Tag])
      );
    })
    .filter(({ box }) => selectedPacks[box - 1]);

  return (
    <main>
      <h1>Jackbox Games Search</h1>
      <div className={styles.content}>
        <div className={styles.filters}>
          <label className={styles.label}>
            Search by Title
            <input
              className={styles.input}
              value={term}
              onChange={({ target }) => setTerm(target.value)}
              placeholder="Quiplash, Drawful, etc."
            />
          </label>
          <div className={styles.pla}>
            <label className={styles.label}>
              Total Players
              <select
                className={styles.input}
                value={players}
                onChange={({ target }) =>
                  target.value === "Any"
                    ? setPlayers(undefined)
                    : setPlayers(Number(target.value))
                }
              >
                <option value="Any">Any</option>
                {Array(9)
                  .fill(null)
                  .map((_, i) => i + 1)
                  .map((number, _, arr) => (
                    <option value={number} key={number}>
                      {number === arr.length ? `${number}+` : number} Player
                      {number === 1 ? "" : "s"}
                    </option>
                  ))}
              </select>
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={allowAudience}
                onChange={() => setAllowAudience((aa) => !aa)}
              />
              Allow Audience?
            </label>
          </div>
          <div className={styles["tag-filters"]}>
            <h2>Categories</h2>
            <div className={styles["tag-filter-list"]}>
              {Object.entries(tags).map(([key, value]) => {
                return (
                  <label key={key} className={styles["checkbox-label"]}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      value={key}
                      onChange={() =>
                        setSelectedTags((r) => ({
                          ...r,
                          [key]: !r[key as Tag],
                        }))
                      }
                    />
                    {value}
                  </label>
                );
              })}
            </div>
          </div>
          <div className={styles["packs-filters"]}>
            <h2>Packs</h2>
            <div className={styles["packs-filter-list"]}>
              {selectedPacks.map((isSelected, i) => (
                <PackFilter
                  key={i}
                  isSelected={isSelected}
                  index={i}
                  handleChange={() =>
                    setSelectedPacks(([...packs]) => {
                      packs[i] = !packs[i];
                      return packs;
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <ul className={styles["game-list"]}>
          {options.map((game) => {
            return (
              <div key={game.title} className={styles.game}>
                <div className={styles["game__header"]}>
                  <h2>{game.title}</h2>
                  <span>Pack {game.box}</span>
                </div>
                <div className={styles["game__body"]}>
                  <div>
                    <span>{game.minPlayers}</span>-
                    <span>{game.maxPlayers}</span>
                    <span>&nbsp;Players</span>
                  </div>
                  <div className={styles["tag-list"]}>
                    {Object.keys(game.tags ?? {}).map((key) => (
                      <span key={key} className={styles.tag}>
                        {tags[key as Tag]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
