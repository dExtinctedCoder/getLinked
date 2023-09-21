import { OPEN_MENU, CLOSE_MENU } from "./app.actions";
import type { menuStateReducerArgs } from "./app.interface";

const initialState = {
	menuState: false,
};

export const menuStateReducer = (
	state = initialState,
	action: { type: string }
): menuStateReducerArgs => {
	switch (action.type) {
		case OPEN_MENU:
			return { ...state, menuState: true };

		case CLOSE_MENU:
			return { ...state, menuState: false };

		default:
			return { ...state };
	}
};
