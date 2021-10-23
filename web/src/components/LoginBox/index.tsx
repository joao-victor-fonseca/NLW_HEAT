import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import Styles from './styles.module.scss'

import { AuthContext } from '../../contexts/auth'



export function LoginBox() {
    const { signInUrl } = useContext(AuthContext)

    return (
        <div className={Styles.loginBoxWrappe}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={Styles.signWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com Github
            </a>

        </div>
    )
}