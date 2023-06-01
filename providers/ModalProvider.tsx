"use client"

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
    const [isMouted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMouted) {
        return null
    };

    return (
        <>
            <AuthModal />
        </>
    )
}

export default ModalProvider;