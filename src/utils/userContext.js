import { createContext } from "react";

const userContext = createContext({
    user: {
        email: '',
    }
})

userContext.displayName = "UserContext";


export default userContext