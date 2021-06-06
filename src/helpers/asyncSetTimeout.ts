const asyncSetTimeout = (timeout: number) =>
	new Promise<void>((resolve, _) =>
		setTimeout(() => resolve(), timeout));
;

export default asyncSetTimeout;