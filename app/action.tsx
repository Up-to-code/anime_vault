"use servsr";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export async function fatchAnime(Page: number) {
  const repones = await fetch(
    `https://shikimori.one/api/animes?page=${Page}&limit=12&order=popularity`
  );
  const Data = await repones.json();
  return Data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}
