import React from 'react'

import { Button } from './styles'

export interface RUbuttonProps {
    label?: string
    typeButton?: 'primary' | 'secondary',
    onClick?: () => void
}

export const RUbutton = ({ label, typeButton = 'primary', onClick }: RUbuttonProps) => {
    return (
        <Button onClick={onClick} typeButton={typeButton}>
            {label}
        </Button>
    )
}