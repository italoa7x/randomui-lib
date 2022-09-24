import React, { ReactNode } from 'react'

import { TagContainer } from './styles'

export interface TagProps {
    children: ReactNode
}
export const RUtag = ({ children }: TagProps) => {

    return (
        <TagContainer>
            {children}
        </TagContainer>
    )
}