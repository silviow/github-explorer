/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.div`
    color: #3a3a3a;
    font-size: 44px;
    margin-top: 60px;
    font-weight: 600;
    line-height: 50px;
`;

export const Form = styled.form<FormProps>`
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
        flex: 1;
        border: 0;
        height: 70px;
        color: #3a3a3a;
        padding: 0 24px;
        border-radius: 10px 0 0 10px;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) =>
            props.hasError &&
            css`
                border-color: #e71d36;
            `}

        &::placeholder {
            color: #bbb;
        }
    }

    button {
        border: 0;
        color: #fff;
        width: 130px;
        font-weight: bold;
        background: #6fcf53;
        border-radius: 0 10px 10px 0;
        transition: background-color 0.1s;

        &:hover {
            background: #63c754;
        }
    }
`;

export const Error = styled.span`
    color: #e71d36;
    display: block;
    margin-top: 10px;
`;

export const Repositories = styled.div`
    margin-top: 70px;
    max-width: 700px;

    a {
        width: 100%;
        padding: 25px;
        display: flex;
        background: #fff;
        align-items: center;
        border-radius: 10px;
        text-decoration: none;
        transition: transform 0.3s;

        & + a {
            margin-top: 10px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin: 0 15px;

            strong {
                color: #3a3a3a;
                font-size: 20px;
            }

            p {
                color: #bbb;
                font-size: 16px;
                margin-top: 3px;
            }
        }

        svg {
            color: #3a3a3a;
            margin-left: auto;
        }
    }
`;
