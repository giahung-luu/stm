export default function CharacterLeft(props) {
  const { character } = props;
  console.log(character);
  return (
    <div className="item row py-4 my-2">
      <div className="col-lg-2">
        <img src={character.img} alt="Bác Hồ" />
      </div>
      <div className="hover-effect col-lg-10">
        <h4>
          {character.name}
          <br />
          <span>{character.description}</span>
        </h4>
      </div>
    </div>
  );
}
