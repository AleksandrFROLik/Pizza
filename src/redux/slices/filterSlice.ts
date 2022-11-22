import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
	categoryId: number;
	sort: {
		name: string;
		sortProperty: string;
	};
}

const initialState: FilterState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		sortProperty: 'price'
	}
};
export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		}
	}
});
export const { setCategoryId, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
