import { useRouter } from "next/router";
import CharacterRight from "./character/CharacterRight";

const Character = () => {
  const router = useRouter();
  const data = JSON.parse(router.query.data);

  return <CharacterRight character={data} />;
};

Character.layout = "default";
export default Character;
