'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Menu() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='p-4'>
            <Button variant='outline-success' onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link href="/feed" onClick={() => setShow((show) => !show)}>feed</Link>
                        </li>
                        <li>
                            <Link href="/create" onClick={() => setShow((show) => !show)}>create new</Link>
                        </li>
                        {/* <li>
                            <Link href="/preferences">preferences</Link>
                        </li> */}
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}





