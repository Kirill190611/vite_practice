import s from './DecksList.module.css'
import {decksAPI} from "../decks-api.ts";
import {useEffect} from "react";

export const DecksList = () => {
  useEffect(() => {
    decksAPI.fetchDecks()
  }, [])

  return <ul className={s.list}></ul>
}
