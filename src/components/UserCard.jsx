const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenForm()
    }


  return (
    <article id="Cajas">
      <h3>{user.first_name} {user.last_name}</h3>
      <ul>
        <li><span>Email: <br /></span><span>{user.email}</span></li>
        <li><span>Birthday: <br /></span><span>{user.birthday}</span></li>
      </ul>
      <footer>
      <button id="BTrash" onClick={handleDelete}><i class='bx bxs-trash'></i></button>
      <button id="BEdit" onClick={handleEdit}><i class='bx bxs-edit'></i></button>
      </footer>
    </article>
    
  )
}

export default UserCard