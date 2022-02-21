import {COUNTER_CHANGE} from '../constants';
export function changeCount(count: any) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
