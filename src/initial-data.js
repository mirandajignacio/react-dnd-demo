const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Amanecer con un cerdito' },
        'task-2': { id: 'task-2', content: 'Dormir mas de 6hs' },
        'task-3': { id: 'task-3', content: 'LLorar por el Vitel Toné' },
        'task-4': { id: 'task-4', content: 'Ordenar la pieza' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Navidad',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
}

export default initialData