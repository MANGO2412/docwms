//link del template: https://codepen.io/Mohuth/pen/QWgrPvp
import styles from './login.module.css';
import clsx from 'clsx';

export default function login(){
    return(
    <div className={styles.container}>
        <div className={styles.screen}>
            <div className={styles.screen__content}>
                <p>No tienes acceso a este contenido, inicia sesion para continuar</p>
                <form className={styles.login}>
                    <div className={styles.login__field}>
                        <i className={clsx(styles.login__icon,"fas fa-user")}></i>
                        <input type="text" className={styles.login__input} placeholder="Nombre de usuario"/>
                    </div>
                    <div className={styles.login__field}>
                        <i className={clsx(styles.login__icon,"fa-lock")}></i>
                        <input type="password" className={styles.login__input} placeholder="Contraseña"/>
                    </div>
                    <div className={styles.login__field}></div>
                    <button className={clsx(styles.button,styles.login__submit)}>
                        <span className={styles.button__text}>Iniciar sesion</span>
                        <i className={clsx(styles.button__icon,"fas fa-chevron-right")}></i>
                    </button>
                      <a href='/docs/intro' className={clsx(styles.button,styles.login__submit)}>
                        <span className={styles.button__text}>Regresar</span>
                        <i className={clsx(styles.button__icon,"fas fa-chevron-right")}></i>
                    </a>
                </form>
            </div>
            <div className={styles.screen__background}>
                <span className={clsx(styles.sreen__background__shape,styles.screen__background__shape4)}></span>
                <span className={clsx(styles.sreen__background__shape,styles.screen__background__shape3)}></span>
                <span className={clsx(styles.sreen__background__shape,styles.screen__background__shape2)}></span>
                <span className={clsx(styles.sreen__background__shape,styles.screen__background__shape1)}></span>
            </div>            
        </div>
    </div>
    )
}