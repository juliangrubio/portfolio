import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { InfoContext } from "../../helpers/InfoContext";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import MailModal from "../modal/MailModal";
import Modal from 'react-modal';
import "./Footer.css";
import useForm from "../../helpers/useForm";
import SendMail from "../../helpers/SendMail";

const Footer = () => {

    const { width } = useWindowDimensions();
    const { isOpen, setIsOpen } = useContext(InfoContext);
    const [activeForm, setActiveForm] = useState(false);
    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formValues;


    useEffect(() => {
        if (activeForm) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeForm]);

    const handleButton = () => {

        if (width >= 960) {
            setIsOpen(!isOpen);
            setActiveForm(false)
            // console.log('paso')
        } else {
            setActiveForm(!activeForm);
        };
        // console.log(isOpen);
    }

    const closeModal = () => {
        setActiveForm(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('cara caca')
        SendMail(name, email, message)
            .then(resp => {
                Swal.fire({
                    icon: 'success',
                    text: 'Email enviado!',
                });
                return;
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: err,
                });
                return;
            });

        reset();
        setActiveForm(false);


    }


    return (
        <footer className="footer">

            <div className={`info-contact ${activeForm ? "hide" : ""}`}>
                <div className="footer-info">
                    <h1>Julián Rubio</h1>
                    <p>Santa Fe, Argentina</p>
                </div>
                <div className="footer-contact">
                    <h3>Contactame</h3>
                    <p>y manos a la obra.</p>
                </div>
            </div>
            {/* <div className={`formulario ${activeForm ? "" : "hide"}`}>
                <h1>MailBox</h1>
                <br />
                <form>
                    <input
                        type="text"
                        name="name"
                        id="namemobile"
                        placeholder=" *Nombre "
                        required
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        name="email"
                        id="emailmobile"
                        placeholder=" *Email "
                        required
                        autoComplete="off"
                        pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                    />
                    <textarea
                        name="message"
                        id="messareamobile"
                        placeholder=" *Mensaje "
                        autoComplete="off"
                        required
                    />
                    <button
                        type="submit"
                        value="Enviar"
                        id="sendmobile"
                    >
                        Enviar
                    </button>
                </form>
            </div> */}

            <Modal
                isOpen={activeForm}
                // onAfterOpen Y onRequestClose, SON PARA APLICAR ESTILOS O ANIMACIONES ENTRE OTRAS COSAS
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                ariaHideApp={false}
                overlayClassName="modal-fondo"

            >

                {/* ----------------------------- CONTENIDO DEL MODAL ------------------------------ */}

                <h1 className="title"> Email box </h1>
                <br />
                <form
                    className="container"
                    onSubmit={handleSubmit}

                // DESHABILITA LA VALIDACION HTML DE LOS INPUT ENTRE OTRAS COSAS, (SI O SI HACER 
                // VALIDACION JS). DE NO HACER ESTO EL DateTimePicker TIRA ERROR.
                // noValidate
                >

                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="inputs"
                            placeholder="*Nombre"
                            autoComplete="off"
                            // value={title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="inputs"
                            placeholder="*Email"
                            name="email"
                            value={email}

                            autoComplete="off"
                            // value={title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="txtarea"
                            placeholder="*Mensaje"
                            name="message"
                            value={message}

                            // value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button
                        className="msend"
                    >
                        <i className="fas fa-envelope"> ENVIAR</i>
                    </button>

                </form>
            </Modal>







            <div className="footer-sns">
                <div className="design-by">Portfolio 2024</div>
                <div className="sns-links">
                    <div>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin linkedin"></i>
                        </a>

                    </div>
                    <div>
                        <a href="https://m.me/julian.rubio.98871174/" target="_blank" rel="noreferrer">
                            {/* <a href="https://www.facebook.com/julian.rubio.98871174/" target="_blank" rel="noreferrer"> */}
                            <i className="fab fa-facebook facebook"></i>
                        </a>

                    </div>
                    <div>

                        {/* <a href="https://gmail.com" target="_blank" rel="noreferrer"> */}
                        <button
                            className="fas fa-envelope-open-text email"
                            onClick={handleButton}
                        />
                        {/* <i className=""></i> */}


                        {/* </a> */}
                    </div>
                    <div>

                        <a href="https://wa.me/5493425104534/" target="_blank" rel="noreferrer">
                            {/* <a href="https://api.whatsapp.com/send?phone=+5493425104534&text=Lo%20contactamos%20de..." target="_blank" rel="noreferrer"> */}
                            <i className="fab fa-whatsapp whatsapp"></i>
                            {/* <i class="fab fa-whatsapp-square whatsapp"></i> */}
                        </a>
                    </div>
                </div>
            </div>
            <MailModal />
        </footer>
    );
};

export default Footer;
