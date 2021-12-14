import { createSlice } from "@reduxjs/toolkit";

//using useState hook : const [userName ,setUserName] =useState(null);
// using useState hook : const [userEmail, setUserEmail]= useState(null);
const initialState = {
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //actions in redux
    //same as the part "setUserName/setUserEmail" in useState hook
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

//same as userName in useState hook
export const selectUserName = (state) => state.user.userName;
//same as userEmail in useState hook
export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer;
