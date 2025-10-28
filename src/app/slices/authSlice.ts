import { createSlice } from '@reduxjs/toolkit';
import { TOKEN, token } from 'src/constants/storage';

export interface IAuthState {
  token?: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  token: token || '',
  isAuthenticated: token ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.isAuthenticated = false;

      localStorage.removeItem(TOKEN);
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
