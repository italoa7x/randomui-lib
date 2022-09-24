import React from "react"
import { ReactNode } from "react"



export interface RUoptionGrupoProps {
    children?: ReactNode
}

import { Section } from './styles'
export const RUoptionsGroup = () => {
    return (
        <>
            <Section>
                <header>
                    E-book
                </header>
                <div>
                    <strong>R$ 00:00</strong>
                </div>
                <footer>
                    .pdf, .epub, .mob
                </footer>
            </Section>
        </>
    )
}