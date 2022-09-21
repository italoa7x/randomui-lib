import React from "react"
import { ReactNode } from "react"

import { CardStyle } from './styles'

interface CardProps {
    children: ReactNode
}


export const Card = ({ children }: CardProps) => {
    return (
        <CardStyle>
            {children}
        </CardStyle>
    )
}