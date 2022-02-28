import { createContext } from 'react'

const UserContext = createContext({
  currentUser: null,
  saveMe: () => {},
  resetMe: () => {}
})

export default UserContext
