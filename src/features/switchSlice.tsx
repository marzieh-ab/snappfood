import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SwitchesState {
  is_express: boolean;
  has_coupon: boolean;
  is_economical: boolean;
  is_pro: boolean;
  is_eco: boolean;
}

const initialState: { switches: SwitchesState } = {
  switches: {
    is_express: false,
    has_coupon: false,
    is_economical: false,
    is_eco: false,
    is_pro: false,
  },
};

const switchSlice = createSlice({
  name: "switchslice",
  initialState,
  reducers: {
    toggleSwitch: (state, action: PayloadAction<keyof SwitchesState>) => {
      //  console.log(state.switches[action.payload],"payloade")
      state.switches[action.payload] = !state.switches[action.payload];
      //  console.log(state.switches,"payloade")
    },

    selectFilteredData : (data: any[], state: { switches: SwitchesState }) =>
  data.filter((datum) => {
    if (Object.keys(state.switches).some((key) => state.switches[key as keyof SwitchesState] && !datum[key as keyof SwitchesState])) {
      return false;
    }
    return true
  })
  },
});

export const { toggleSwitch , selectFilteredData } = switchSlice.actions;

export default switchSlice.reducer;
