import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@github-explorer:repositories',
        );

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@github-explorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault();

        if (!newRepo) {
            setInputError('Enter {github_author_user}/{repository_name}');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);

            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError('This repository could not be found');
        }
    }

    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Find repositories on GitHub.</Title>
            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e): void => setNewRepo(e.target.value)}
                    placeholder="Enter a repository name"
                />
                <button type="submit">Search</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="a">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
