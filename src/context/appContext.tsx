import React, { createContext, FC, useContext, useReducer } from 'react'
import ApplicationReducer from './appReducer'
import initialState, { IState } from './initialState'

const AppContext = createContext([{} as IState, () => null])

interface Props {}

export const AppProvider: FC<Props> = ({children,...others}) => {
  const [appState, dispath] = useReducer(
    ApplicationReducer,
    initialState()
  )
  const mergeState = {...appState, ...others}
  return <AppContext.Provider value={[mergeState, dispath]}>
    { children }
  </AppContext.Provider>
}

export const useApplicationState = () => useContext(AppContext)

export default AppContext