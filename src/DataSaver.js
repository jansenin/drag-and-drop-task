import { store } from "./store/store"
export const AllDataItemName = "All data"

export const startSavingData = () => {
    store.subscribe(() => localStorage.setItem(AllDataItemName, JSON.stringify(store.getState())))
}