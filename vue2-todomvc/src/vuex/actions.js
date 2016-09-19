function makeAction(type) {
  return ({ commit }, payload) => commit(type, payload);
}

export const addtodo = makeAction('ADD_TODO');
export const deletetodo = makeAction('DELETE_TODO');
export const toggletodo = makeAction('TOGGLE_TODO');
export const toggleall = makeAction('TOGGLE_ALL');
export const edittodo = makeAction('EDIT_TODO');
export const clearcompleted = makeAction('CLEAR_COMPLETED');
