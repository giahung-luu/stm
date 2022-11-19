import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { auth, database } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Button, Pagination } from "react-bootstrap";
import Characters from "./character/Characters";
import { getCharacters } from "../services/characterService";
function ListCharacter({ totalPostCount }) {
  const router = useRouter();
  const [characters, setCharacters] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const itemPerPage = 3;
  const totalPage = Math.ceil(characters.length / itemPerPage);
  const arrayPage = Array.from(Array(totalPage).keys());

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("auth/signin");
      }
    });
  }, [auth]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const items = arrayPage.map((number) => (
    <Pagination.Item
      key={number}
      active={number === page}
      onClick={() => setPage(number)}
    >
      {number + 1}
    </Pagination.Item>
  ));

  return (
    <>
      <div className="row list-character-page">
        <Head>
          <title>List Character</title>
        </Head>
        <Characters
          character1={characters[(page + 1) * itemPerPage - 3]}
          character2={characters[(page + 1) * itemPerPage - 2]}
          character3={characters[(page + 1) * itemPerPage - 1]}
        />
      </div>
      <Button onClick={() => console.log(characters)}>Test 2</Button>
      <Pagination style={{ justifyContent: "center" }}>{items}</Pagination>
    </>
  );
}

ListCharacter.layout = "default";
export default ListCharacter;
