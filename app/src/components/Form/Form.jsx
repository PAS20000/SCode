import { useState } from "react"
import { useTheme } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"
import { Card } from "./Form.styles"

const Form = ({}) => {
   const [login, setLogin] = useState(true)
   const theme = useTheme()

   return(
       <Card onLoad={ () => alert('caso não queira se registrar, Usuário: admin, Senha: admin')}>
            <form>
                <NextImage 
                    src={theme.Title === 'light' ? '/img/ScodeL.png':'/img/ScodeD.png'}
                    width={90} height={90} alt='Logo' 
                />
                <label htmlFor="email">Email</label>
                <input type="email"  placeholder="Seu melhor email"/>
                <label htmlFor="senha">Senha</label>
                <input type="password" placeholder="Sua senha"/>
                <button type="submit" className="login">{!!login ? 'Login':'Registrar-se'}</button>
                {!!login &&
                    <button className='register' onClick={() => setLogin(false)}>registre-se</button>
                }
            </form>
       </Card>
   )
}

export default Form