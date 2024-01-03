import style from './Styles/nav.module.css';
export default function Nav ({minimal, authToken,showModal,setIsSingnUp})  {
    const handleClick = () => {
        setShowModal(true)
        setIsSingnUp(false)
    }
    return (
        <div className={style.regis}>
            {!authToken && !minimal && <button className={style.navbutton}> กรอกข้อมูล </button>}
        </div>
    )
}
