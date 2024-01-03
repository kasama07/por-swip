import style from "./swip.module.css"
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { useState} from 'react'
import AuthModal from "@/components/AuthModal";



export default function Swip (){
    const [showModal,setShowModal] = useState(false)

    const authToken = false


    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        
    }
    return(
        <div className={style.overlay}>
        <Navbar/>
        
        <div className={style.body}>
            <div className={style.homeSwip}>
                <h1>Swip Right</h1>
                <Nav minimal={false} authToken={authToken}/>
                <button className={style.primarybutton}>
                    {authToken ? 'signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal = {setShowModal}/>
                )}

            </div>
           
        </div>
        
        </div>
    )
}