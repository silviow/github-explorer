import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        color: #a8a8b3;
        font-size: 17px;
        align-items: center;
        text-decoration: none;
        transition: transform ease-in-out 0.2s;

        &:hover {
            transform: translateX(-3px);
        }

        svg {
            color: #3a3a3a;
            margin-right: 3px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 70px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 25px;

            strong {
                color: #3a3a3a;
                font-size: 36px;
            }

            p {
                color: #3a3a3a;
                font-size: 16px;
                margin-top: 5px;
                text-align: justify;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 60px;
            }

            strong {
                display: block;
                color: #3a3a3a;
                font-size: 30px;
            }

            span {
                color: #a8a8b3;
                display: block;
                margin-top: 5px;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 70px;

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

        div {
            flex: 1;
            margin: 0 15px;

            strong {
                color: #3a3a3a;
                font-size: 20px;
            }

            p {
                color: #a8a8b3;
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
