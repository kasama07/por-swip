const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className={style.auth-madal}>
            <div onClick={handleClick}>x</div>
            AUTH MODAL
        </div>
    )
}
export default AuthModal
/*----ไม่มีได้-----*/
