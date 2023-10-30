'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Menu() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    interface OffcanvasLinkProps {
        label: string;
        path: string;
    }
    const OffcanvasLI: FC<OffcanvasLinkProps> = ({ path, label }) => {
        return (
            <li className='p-6'>
                <Link
                    className='uppercase small'
                    href={`/${path}`}
                    onClick={() => setShow((show) => !show)}>
                    {label}
                </Link>
            </li>)
    }

    return (
        <div className='p-4'>
            <Button variant='outline-success' onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>menu</Offcanvas.Title>
                    <button  onClick={handleClose} aria-label="Close">
                        <FontAwesomeIcon className="h-8 w-8" icon={faXmark} />
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <OffcanvasLI path='feed' label='feed' />
                        <OffcanvasLI path="create" label='create new' />
                        {/* 
                            <Link href="/preferences">preferences</Link>
                         */}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}





