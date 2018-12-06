/**
 * Muestra nombre de filtro con formato
 * @param {string} filter Ejm: 'todo' -> 'To Do'
 */
export const filtroBonito = filter => {
	switch (filter) {
		case 'todo':
			return 'To Do'
		case 'doing':
			return 'Doing'
		case 'done':
			return 'Done'
		default:
			return 'To Do'
	}
}
