import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Find repositories on GitHub.</Title>

            <Form action="">
                <input placeholder="Enter a repository name" />
                <button type="submit">Search</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img
                        src="https://avatars1.githubusercontent.com/u/43392489?s=460&u=540b31742ab263aff6c137fcc2c59d8eaa0ca2c7&v=4"
                        alt="Silvio Marques"
                    />
                    <div>
                        <strong>silviow/tindev</strong>
                        <p>A tinder for devs.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img
                        src="https://avatars1.githubusercontent.com/u/43392489?s=460&u=540b31742ab263aff6c137fcc2c59d8eaa0ca2c7&v=4"
                        alt="Silvio Marques"
                    />
                    <div>
                        <strong>silviow/tindev</strong>
                        <p>A tinder for devs.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img
                        src="https://avatars1.githubusercontent.com/u/43392489?s=460&u=540b31742ab263aff6c137fcc2c59d8eaa0ca2c7&v=4"
                        alt="Silvio Marques"
                    />
                    <div>
                        <strong>silviow/tindev</strong>
                        <p>A tinder for devs.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
