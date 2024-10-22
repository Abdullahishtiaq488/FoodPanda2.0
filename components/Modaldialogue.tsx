"use client";
import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        // Disable scrolling on the body when the modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null; // Do not render modal if not open

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg w-full md:w-1/2 h-[540px] relative overflow-hidden">
                <div onClick={onClose} className='absolute top-5 right-5 z-10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]   bg-white flex items-center justify-center border border-gray-300 text-black p-2 transition-all duration-200 hover:p-3 hover:-mx-1 hover:-my-1 hover:bg-gray-200 cursor-pointer'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
