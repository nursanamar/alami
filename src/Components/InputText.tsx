import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    border: 1px solid #ededed;
    border-radius: 10px;
    height: 60px;
    padding-left: 16px;
    color: #333
`

const Label = styled.label`
    margin-bottom: -12px !important;
    margin-left: 8px !important;
    color: #002c4b;
    font-weight: 500;
    background: white;
    padding: 0 8px;
    position: relative;
    display: flex;
    width: fit-content
`

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    style?: React.CSSProperties
}

export default function InputText(props: InputTextProps) {
    return (
        <div style={{ width: "100%", marginBottom: 10, ...props.style}}>
            <Label>{props.label}</Label>
            <Input {...props} />
        </div>
    )
}
