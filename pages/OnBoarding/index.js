import Nav from '@/components/Nav'
import { useState } from 'react'

const OnBoarding = () => {
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={ () => {} }
                showModal={false}
                
            />
            <div className={style.onboarding}>
                <h2> CREATE ACCOUNT </h2>

                <from onSubmit = {handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />

                        <label >Birthday</label>
                        <div className={style.mutipleinputcontainer}>
                        <input
                            id="dab_day"
                            type="number"
                            name="dab_day"
                            placeholder='DD'
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />

                        <input
                            id="dab_month"
                            type="number"
                            name="dab_month"
                            placeholder='MM'
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        <input
                            id="dab_year"
                            type="number"
                            name="dab_year"
                            placeholder='YYYY'
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        </div>

                        <label >Gender</label>
                        <div className={style.mutipleinputcontainer}>
                        <input
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            placeholder='DD'
                            value={"man"}
                            onChange={handleChange}
                            checked={false}
                        />
                            <input
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            placeholder='DD'
                            value={"man"}
                            onChange={handleChange}
                            checked={false}
                            />
                            <input
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            placeholder='DD'
                            value={"man"}
                            onChange={handleChange}
                            checked={false}
                            />
                        </div>
                    </section>
                </from>
            </div>
        </>
    )
}
export default OnBoarding