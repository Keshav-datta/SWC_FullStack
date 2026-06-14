import { useState } from "react";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const saveEdit = (id) => {
    editTask(id, editValue);
    setEditingId(null);
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${
              task.completed ? "completed" : ""
            }`}
          >
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) =>
                    setEditValue(e.target.value)
                  }
                />

                <button
                  onClick={() =>
                    saveEdit(task.id)
                  }
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>

                <div className="actions">
                  <button
                    onClick={() =>
                      toggleTask(task.id)
                    }
                  >
                    {task.completed
                      ? "Undo"
                      : "Complete"}
                  </button>

                  <button
                    onClick={() =>
                      startEditing(task)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteTask(task.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
