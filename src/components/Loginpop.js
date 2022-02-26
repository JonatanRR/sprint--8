import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { useState } from 'react';
import Starship from '../pages/Starship';

const LoginPop = () => {

    const [visible, setVisible] = useState(false);
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [flagLog, setFlagLog] = useState(false);
    const [home, setHome] = useState(true);

    const handleShow = () => {
        setVisible(!visible);
    }

    const handleLogin = (e) => {

        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emailLog || !passwordLog) {
            setFlagLog(true);
        } else if(passwordLog !== pass || emailLog !== mail) {
            setFlagLog(true);
        } else {
            setHome(!home);
            setFlagLog(false);
            console.log("You're logged in");
        }
    }


    return ( 
        <>
            <ul>
                <button className= "buttonLog" onClick= {handleShow}>LOGIN</button>
            </ul>
            {home && (
                <div>
                    <Modal isOpen= {visible}>
                        <ModalBody className='modalbody'>
                            <form onSubmit={handleLogin} className= "form">
                            <h1 className='text-center'>LOGIN</h1>
                            <div className="form group">
                                <label>Email</label>
                                <input 
                                    type= "email"
                                    className="form-control"
                                    placeholder="Enter your e-mail"
                                    onChange={(e) => setEmailLog(e.target.value)} />
                            </div>
                            <div className="form group">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPasswordLog(e.target.value)} />
                            </div>
                            <button type="submit" className='buttonAccept'>LOGIN</button>
                            </form>
                        </ModalBody>
                </Modal></div>) }
        </>
     );
}
 
export default LoginPop;