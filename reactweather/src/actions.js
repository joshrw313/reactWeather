export const GETLOCATION = 'getLocation';
export const GETCURRENT = 'getCurrent';
export const GETDAILY = 'getDaily';
export const GETHOURLY = 'getHourly';

export function actionGetLocation() {
	return {
		type: GETLOCATION
	};
}
export function actionGetCurrent() {
	return {
		type: GETCURRENT
	};
}
export function actionGetDaily() {
	return {
		type: GETDAILY
	};
}
export function actionGetHourly() {
	return {
		type: GETHOURLY
	};
}