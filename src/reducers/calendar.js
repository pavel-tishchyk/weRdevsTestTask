import { SET_SELECTED_DATE } from "../actions/calendar";

const initialState = {
	selectedDate: Number(new Date())
};

export default function (state = initialState, {payload, type}) {
	switch (type) {
		case SET_SELECTED_DATE:
			return {
				...state,
				selectedDate: Number(payload.selectedDate)
			};
		default:
			return state;
	}
}
