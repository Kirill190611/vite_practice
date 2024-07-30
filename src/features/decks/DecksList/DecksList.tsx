import s from './DecksList.module.css'
import {decksAPI} from "../decks-api.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../app/store.ts";
import {setDecksAC} from "../decks-reducer.ts";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {selectDecks} from "../decks-selectors.ts";
import {useSelector} from "react-redux";

export const DecksList = () => {

    const dispatch = useAppDispatch();
    const decks = useSelector(selectDecks)

    useEffect(() => {
        decksAPI.fetchDecks()
            .then(res => {
                dispatch(setDecksAC(res.data.items))
            })
    }, [])

    return <ul className={s.list}>
        {
            decks.map(deck => <DeckItem key={deck.id}
                                        deck={deck}/>)
        }
    </ul>
}
