import CharacterLeft from "./CharacterLeft";
import CharacterRight from "./CharacterRight";

export default function Character(props) {
  const { character1, character2, character3 } = props;
  return (
    <div className="">
      {character1 && <CharacterLeft character={character1} />}
      {character2 && <CharacterRight character={character2} />}
      {character3 && <CharacterLeft character={character3} />}
    </div>
  );
}
