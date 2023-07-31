import { isObject } from '../isObject/isObject';
import { isString } from '../isString/isString';
import type { TeamName } from '../logger/@types/logger';
import { isTeam } from '../logger/teamStyles';
import type { GuardianMeasure } from './@types/measure';

const isGuardianMeasure = (
	measure: PerformanceEntry,
): measure is GuardianMeasure =>
	measure instanceof PerformanceMeasure &&
	isObject(measure.detail) &&
	isString(measure.detail.team) &&
	isTeam(measure.detail.team) &&
	typeof measure.detail.name === 'string' &&
	(measure.detail.action === undefined ||
		typeof measure.detail.action === 'string');

/**
 * Retrieve `PerformanceMeasure` generated with `startPerformanceMeasure`.
 * The type is narrowed to `GuardianMeasure` which contains relevant details
 */
export const getMeasures = (
	teams: readonly TeamName[],
): readonly GuardianMeasure[] =>
	window.performance
		.getEntriesByType('measure')
		.filter(isGuardianMeasure)
		.filter((measure) => teams.includes(measure.detail.team));
