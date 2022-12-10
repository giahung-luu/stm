import CharacterLeft from "./CharacterLeft";
import CharacterRight from "./CharacterRight";
import { eventYear } from "../../lib/store";
export default function Character(props) {
  /**
   *
   */
  const { character1, character2, character3 } = props;
  return (
    <div className="col-lg-8">
      <div className="featured-games header-text" style={{ width: "140%" }}>
        <div className="heading-section">
          <h4>
            <em>Nhân Vật</em> Lịch Sử
            <select>
              {eventYear.map((item, index) => (
                <option
                  key={index}
                  value=""
                  attr-start={item.startTime}
                  attr-end={item.endTime}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </h4>
        </div>
        <div className="">
          {character1 && <CharacterLeft character={character1} />}
          {character2 && <CharacterRight character={character2} />}
          {character3 && <CharacterLeft character={character3} />}
        </div>
      </div>
    </div>
  );
}
