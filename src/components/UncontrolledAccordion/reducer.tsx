type ActionType = {
  type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE_COLLAPSED';
export const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return !state;
    default:
      throw new Error('bad action type');
  }
  return state;
};