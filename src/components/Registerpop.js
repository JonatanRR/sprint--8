import { Modal, ModalHeader, ModalBody, Button, Alert } from 'reactstrap';
import { useState } from 'react';
import Loginpop from './Loginpop';

const Registerpop = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !surname || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in localStorage");
            setLogin(!login);
        }
    }

    const handleClick = () => {
        setLogin(!login);
    }

    const handleShow = () => {
       setVisible(!visible);
    }


    return ( 
        <>
            <ul>
                <button className= "buttonLog" onClick= {handleShow}>REGISTER</button>
            </ul>
            {login ? (
                <div>
                <Modal isOpen= {visible} className="form">
                    <ModalBody className='modalbody'>
                        <form onSubmit={handleSubmit} >
                        <h1 className='text-center'>REGISTER</h1>
                        <div className="form group">
                            <label>Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)} />                        
                        </div>
                        <div className="form group">
                            <label>Surname</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter your surname"
                                onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div className="form group">
                            <label>Email</label>
                            <input 
                                type= "email"
                                className="form-control"
                                placeholder="Enter your e-mail"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form group">
                            <label>Password</label>
                            <input 
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='buttonAccept'>REGISTER</button>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                Please fullfield all characters from the form
                            </Alert>
                        )}
                    </form>
                </ModalBody>
            </Modal></div>) : <Loginpop/>}
        </>
     );
}
 
export default Registerpop;