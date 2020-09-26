export const SET_SELECTED_DATE = "SET_SELECTED_DATE";

export const setSelectedDate = (selectedDate) => {
	return {
		type: SET_SELECTED_DATE,
		payload: {
			selectedDate
		}
	};
};
