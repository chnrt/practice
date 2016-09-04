export const addtodo = ({ dispatch }, text) => dispatch('ADD_TODO', text);

export const deletetodo = ({ dispatch }, todo) => dispatch('DELETE_TODO', todo);

export const toggletodo = ({ dispatch }, todo) => dispatch('TOGGLE_TODO', todo);

export const toggleall = ({ dispatch }, bl) => dispatch('TOGGLE_ALL', bl);

export const edittodo = ({ dispatch }, todo, text) => dispatch('EDIT_TODO', todo, text);

export const clearcompleted = ({ dispatch }) => dispatch('CLEAR_COMPLETED');
