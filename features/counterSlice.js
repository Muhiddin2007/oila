import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  creditValue: '',
  monthValue: '',
  davrValue: '',
  mainDebt: [],
  districtId: [],
  regionId: [],
  cityId: [],
  pasport: '',
  series: [],
  number: [],
  spends: [],
  dimensions: [],
  parentId: [],
  amount: [],
  asum: [],
  month: [],
  preveligious: [],
  selectedId: [],
};

export const mainSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setNew: state => {
      state.mainDebt = [];
    },
    setCreditValue: (state, action) => {
      state.creditValue = action.payload;
    },
    setMonthValue: (state, action) => {
      state.monthValue = action.payload;
    },
    setDavrValue: (state, action) => {
      state.davrValue = action.payload;
    },
    setMainDebt: (state, action) => {
      state.mainDebt.push(action.payload);
    },
    setDistrictId: (state, action) => {
      state.districtId = action.payload;
    },
    setRegionId: (state, action) => {
      state.regionId = action.payload;
    },
    setCityId: (state, action) => {
      state.cityId = action.payload;
    },
    setPasport: (state, action) => {
      state.pasport = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setSpends: (state, action) => {
      state.spends = action.payload;
    },
    setDimensions: (state, action) => {
      state.dimensions = action.payload;
    },
    setParentId: (state, action) => {
      state.parentId = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setAsum: (state, action) => {
      state.asum = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setPreveligious: (state, action) => {
      state.preveligious = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const {
  setCreditValue,
  setMonthValue,
  setDavrValue,
  setMainDebt,
  setNew,
  setDistrictId,
  setRegionId,
  setCityId,
  setPasport,
  setSeries,
  setNumber,
  setSpends,
  setDimensions,
  setParentId,
  setAmount,
  setAsum,
  setMonth,
  setPreveligious,
  setSelectedId,
} = mainSlice.actions;

export default mainSlice.reducer;
