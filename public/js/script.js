$(document).ready(function () {

    async function loadTasks() {
        try {
            const response = await axios.get('/api/tasks'); 
            const tasks = response.data;
            const taskList = $('#task-list');//ID UL
            taskList.empty(); 

            tasks.forEach(task => {
                const li = $('<li></li>').text(task.title);
                if (task.completed) {//BOOLEAN
                    li.addClass('completed');
                }

                li.on('click', async () => {
                    try {
                        await axios.put(`/api/tasks/${task.id}`, { completed: !task.completed });
                        loadTasks(); 
                    } catch (error) {
                        console.error('Error al actualizar tarea:', error);
                    }
                });

                taskList.append(li); 
            });
        } catch (error) {
            console.error('Error al cargar tareas:', error);
        }
    }

    // Evento para agregar una nueva tarea
    $('#add-task').on('click', async () => {
        const taskTitle = $('#task-input').val();

        if (taskTitle) {
            try {
                await axios.post('/api/tasks', { title: taskTitle });
                $('#task-input').val(''); 
                loadTasks();
            } catch (error) {
                console.error('Error al agregar tarea:', error);
            }
        }
    });

    loadTasks();
});
