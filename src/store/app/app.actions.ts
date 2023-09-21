// export action types for toggleMenu function
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const toggleMenu = (
	action: typeof OPEN_MENU | typeof CLOSE_MENU
): { type: string } => {
	return {
		type: action,
	};
};
