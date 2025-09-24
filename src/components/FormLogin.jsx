import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormLogin = () => {
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()


  const PASS = "newells"

  const validatePassword = () => {

    if (password === PASS) {
      setMessage("contraseña valida, seras redirigido")
      setTimeout(() => {
        navigate("/chat")
      }, 3000)
    } else {
      console.log("contraseña invalida")


    }

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword()

  }



  return (

    <form onSubmit={handleSubmit} >
      <label >contraseña de acceso </label>
      <input type="text" onChange={(event) => setPassword(event.target.value)} />
      <p>{message} </p>
      <button>Acceder</button>

    </form>

  )
}

export default FormLogin