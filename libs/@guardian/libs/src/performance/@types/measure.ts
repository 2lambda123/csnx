declare global {
	interface Performance {
		/**
		 * Firefox returned `undefined` before v101
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark#browser_compatibility
		 */
		measure(
			measureName: string,
			startOrMeasureOptions?: string | PerformanceMeasureOptions,
			endMark?: string,
		): PerformanceMeasure | undefined;
	}
}

export type {};