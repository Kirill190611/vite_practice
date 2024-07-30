import {Dispatch} from "redux";
import {AddDeckParams, decksAPI} from "./decks-api.ts";
import {addDecksAC, setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = () => {
    return (dispatch: Dispatch) => {
        decksAPI.fetchDecks()
            .then(res => {
                dispatch(setDecksAC(res.data.items))
            })
    }
}

export const addNewDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
        return decksAPI.addDeck(params)
            .then(res => {
                dispatch(addDecksAC(res.data))
            })
    }
