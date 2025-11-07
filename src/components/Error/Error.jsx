import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='errorPage'>
            <span className='errorPage__code'>404</span>
            <h2 className='errorPage__title'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error