import './styles.css'
import { ETodoStatus } from '../../enums'
import { useEffect, useState } from 'react'

const TodoItem = (props) => {
  const { todo, deleteTodo, updateTodo } = props

  const [isEditable, setIsEditable] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(todo?.title)

  const isDoingTodo = todo?.status === ETodoStatus.DOING

  function toggleEditTodo() {
    setIsEditable(!isEditable)
  }

  function onChangeEditInput(event) {
    const title = event.target.value
    setCurrentTitle(title)
  }

  async function onKeyPressEditInput(event) {
    if (event.code === 'Enter') {
      await updateTodoTitle(todo, currentTitle)
    }
  }

  async function updateTodoTitle(todo, newTitle) {
    await updateTodo(todo._id, {
      ...todo,
      title: newTitle
    })

    toggleEditTodo()
  }

  async function updateTodoStatus(todo) {
    let newStatus

    if (isDoingTodo) {
      newStatus = ETodoStatus.DONE
    } else {
      newStatus = ETodoStatus.DOING
    }

    await updateTodo(todo._id, {
      ...todo,
      status: newStatus
    })
  }

  useEffect(() => {
    if (!isEditable) {
      setCurrentTitle('')
    } else {
      setCurrentTitle(todo?.title)
    }
  }, [isEditable])

  return (
    <div className="todo-container">
      {isEditable ? (
        <input type={'text'} value={currentTitle} onChange={onChangeEditInput} onKeyPress={onKeyPressEditInput} />
      ) : (
        <div
          className={`title title--${isDoingTodo ? ETodoStatus.DOING : ETodoStatus.DONE}`}
          onClick={() => {
            updateTodoStatus(todo)
          }}
        >
          <div>{todo?.title}</div>
        </div>
      )}

      <i
        className="fa-solid fa-trash"
        onClick={() => {
          deleteTodo(todo)
        }}
      ></i>
      {isDoingTodo && <i class="fa-solid fa-pencil" onClick={toggleEditTodo}></i>}
    </div>
  )
}

export default TodoItem
