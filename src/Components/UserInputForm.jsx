import { useState, useRef, Fragment } from 'react';
import Table from './Table';

const UserInputForm = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userData')) || []);
    const [age, setAge] = useState("Age");

    const name = useRef(null);
    const dob = useRef(null);
    const mobile = useRef(null);
    const adhar = useRef(null);

    const getFormData = (e) => {
        e.preventDefault();
        let userName = name.current.value;
        let userDob = dob.current.value;
        let userMobile = mobile.current.value;
        let userAdhar = adhar.current.value;

        if(!userName || !userAdhar || !userMobile || !userDob){
            alert('All fields are required');
            if(!userName) name.current.focus();
            if(!userMobile) mobile.current.focus();
            if(!userAdhar) adhar.current.focus();
            if(!userDob) dob.current.focus();
            return;
        }

        let userAge = new Date().getFullYear() - new Date(userDob).getFullYear();
        setAge(userAge);

        const newUser = { userName, userDob, userMobile, userAdhar, userAge };
        const updatedUserInfo = [...userInfo, newUser];

        setUserInfo(updatedUserInfo);
        localStorage.setItem('userData', JSON.stringify(updatedUserInfo));
        clearInputs();
    };

    const clearInputs = () => {
        name.current.value = '';
        dob.current.value = '';
        mobile.current.value = '';
        adhar.current.value = '';
    };

    return (
        <Fragment>
            <h2>User Input Form</h2>
            <form>
                <input type="text" placeholder="Enter Name" ref={name} />
                <input type="date" ref={dob} />
                <input type="number" placeholder="Enter Mobile No." min={1000000000} max={9999999999} ref={mobile} />
                <input type="number" placeholder="Enter Adhar No." min={100000000000} max={999999999999} ref={adhar} />
                {/* <input type="text" value={age} readOnly /> */}
                <button type="submit" onClick={getFormData}>Submit</button>
            </form>
            {/* Pass userInfo as a prop */}
            <Table users={userInfo} setUsers={setUserInfo} />
        </Fragment>
    );
};

export default UserInputForm;
