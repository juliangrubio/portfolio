import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { InfoContext } from '../../helpers/InfoContext';
import SendMail from '../../helpers/SendMail';
import useForm from '../../helpers/useForm';
import './MailModal.css'

const customStyles = {
    content: {
        // width: '65%',
        // height: '50%',
        height: 'auto',
        width: 'auto',
        textAlign: 'center',
        // height: 'auto',
        // width: 'auto',
        background: 'transparent',
        border: 'none',
        // overflow: 'hidden',
        padding: '0',
        top: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // transition: '10s ease'
        // transition: 'opacity .2s ease-in-out'
    }
};
Modal.setAppElement('#root');

const MailModal = () => {

    const { isOpen, setIsOpen } = useContext(InfoContext);
    const { sobreOpen, setSobreOpen } = useContext(InfoContext);
    const { sobrePull, setSobrePull } = useContext(InfoContext);
    const [formValues, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = formValues;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            setSobrePull('');
            setSobreOpen('');
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, setSobreOpen, setSobrePull]);


    const handleClick = () => {
        setSobreOpen('open');
        setSobrePull('pull');
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
        setIsOpen(false);
    }
    

    const closeModal = () => {
        setIsOpen(false)
        // const purge = setTimeout(() => {
        // setSobreOpen('close');
        // setSobrePull('push');
        //     console.log('jajaj')
        //     return(clearTimeout(purge))
        // },1000);

    }

    // console.log('size:', window.innerWidth);
    // const { height, width } = useWindowDimensions();

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={0}
            // className="customStyles"
            style={customStyles}
            // ariaHideApp={false}
            overlayClassName="modal-fondo"
        >

            <div className="sobre">
                <div className="frame">
                    <div id="button_open" onClick={handleClick}>
                        Redactar
                    </div>
                    <div className={`message ${sobrePull}`}>
                        <form
                            onSubmit={handleSubmit}
                            spellCheck="false"
                        >
                            <input
                                type="text"
                                name="name"
                                value={name}
                                id="name"
                                onChange={handleInputChange}
                                placeholder=" *Nombre "
                                
                                required
                                autoComplete="off"
                            />

                            <input
                                type="email"
                                name="email"
                                value={email}
                                id="email"
                                onChange={handleInputChange}
                                placeholder=" *Email "
                                required
                                autoComplete="off"
                                pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                            />

                            <textarea
                                name="message"
                                value={message}
                                id="messarea"
                                onChange={handleInputChange}
                                placeholder=" *Mensaje "
                                autoComplete="off"
                                required
                            />

                            <button
                                value="Enviar"
                                id="send"
                            >
                                Enviar
                            </button>

                        </form>
                    </div>
                    <div className="bottom"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className={`top ${sobreOpen}`}></div>
                </div>
            </div>

        </Modal>
    )
}

export default MailModal
