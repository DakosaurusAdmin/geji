
"use client";
import React, { useEffect, useState } from 'react'
import SignInForm from '@/components/SignInForm'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import { SignInFormV2 } from '@/components/SignInFormV2';

export default function SignIn() {
    const router = useRouter();

    const {data:session} = useSession();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if(session) {
            setIsOpen(false);
        }
    },[setIsOpen, session])

    return (

        <dialog id="signInModal" className="modal" open={isOpen}>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="modal-box w-11/12">
                <form method="dialog" className='flex'
                onSubmit={() => {
                    router.push('./')
                }}>
                    <button className="btn btn-circle m-auto mr-0">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </form>
                <h3 className="font-bold text-lg text-center">Sign In!</h3>

                <div className="modal-action">
                    <SignInFormV2 />
                </div>

            </div>

        </dialog>


    )
}
