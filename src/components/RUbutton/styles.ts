import styled, { css } from 'styled-components'
import { RUbuttonProps } from '.'

export const Button = styled.button<RUbuttonProps>`
    background-color: ${({ typeButton }: RUbuttonProps) => typeButton === 'primary' ? '#EB9B00' : '#FFFFFF'};
    padding: 16px 32px;
    font-size: 20px;
    color: ${({ typeButton }: RUbuttonProps) => typeButton === 'primary' ? '#FFFFFF' : '#EB9B00'};
    border: 2px solid #EB9B00;
    cursor: pointer;
   

    ${({ typeButton }: RUbuttonProps) => typeButton === 'primary'

        ?

        css`
    &:hover {
        background-color: '#B87900';
        border: 2px solid '#B87900';
    }
    `

        :
        css`
                &:hover{
                    background-color: '#FFFFFF';
                    border: 2px solid '#B87900';
                    color: '#B87900';
                }
            `
    }
   

`