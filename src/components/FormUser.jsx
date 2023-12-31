import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {

     

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if(infoUpdate){
        // Update
        updateUser('/users', infoUpdate.id, data)
        setInfoUpdate()
        }else {
        // Create
        createUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleCloseForm = () => {
        setCloseForm(true)
    }

  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
    <form onClick={e => e.stopPropagation()} className="formuser"  onSubmit={handleSubmit(submit)}>
        <h2 className="formuser__title">{infoUpdate ? 'Update' : 'New User'} </h2>
        <div onClick={handleCloseForm} className="formuser__close">X</div>
        <div className="formuser__group">
        <label className="formuser__label" htmlFor="email">Email</label>
        <input className="formuser__input" {...register('email')} type="email" id="email"  />
        </div>
        <div className="formuser__group">
        <label className="formuser__label" htmlFor="password">Password</label>
        <input className="formuser__input" {...register('password')} type="password" id="password"  />
        </div>
        <div className="formuser__group">
        <label className="formuser__label" htmlFor="first_name">First_name</label>
        <input className="formuser__input" {...register('first_name')} type="text" id="first_name" />
        </div>
        <div className="formuser__group"> 
        <label className="formuser__label" htmlFor="last_name">Last_name</label>
        <input className="formuser__input" {...register('last_name')} type="text" id="last_name" />
        </div>
        <div className="formuser__group">
        <label className="formuser__label" htmlFor="birthday">Birthday</label>
        <input className="formuser__input" {...register('birthday')} type="date" id="birthday"  />
        </div>
        <button className="formuser__btn">{infoUpdate ? 'update' : 'create'}</button>
    </form>
    </div>
  )
}

export default FormUser