import React from 'react'

interface SpinerProps {
    isActive: boolean;
}

export default function Spinner(props: SpinerProps) {
    if (props.isActive) {
        return (
            <div className="overlay">
                <div className="overlay__inner">
                    <div className="overlay__content"><span className="spinner"></span></div>
                </div>
            </div>
        )
    }

    return null
}
