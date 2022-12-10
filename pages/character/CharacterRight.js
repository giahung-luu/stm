export default function CharacterRight(props) {
  const { character } = props;

  return (
    <div className="item row py-4 my-2">
      <div className="hover-effect col-lg-10 text-end">
        <h4>
          {character.name}
          <br />
          <span>{character.description}</span>
        </h4>
      </div>
      <div className="col-lg-2">
        <img src={character.img} alt="img" />
      </div>
    </div>
  );
}
