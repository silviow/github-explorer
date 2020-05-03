import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryName {
    repository: string;
}

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    };
    html_url: string;
}

const Repository: React.FC = () => {
    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryName>();

    let storagedRepositories = localStorage.getItem(
        '@github-explorer:repositories',
    );

    if (!storagedRepositories) storagedRepositories = '[]';

    const repositories: Repository[] = JSON.parse(storagedRepositories);

    const repository = repositories.find(
        (repo) => repo.full_name === params.repository,
    );

    useEffect(() => {
        api.get(`/repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });
    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={17} />
                    Return
                </Link>
            </Header>
            {repository && (
                <>
                    <RepositoryInfo>
                        <header>
                            <img
                                src={repository.owner.avatar_url}
                                alt={repository.owner.login}
                            />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>{repository.stargazers_count}</strong>
                                <span>Stars</span>
                            </li>
                            <li>
                                <strong>{repository.forks_count}</strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>{repository.open_issues_count}</strong>
                                <span>Issues</span>
                            </li>
                        </ul>
                    </RepositoryInfo>
                    {issues && (
                        <Issues>
                            {issues.map((issue) => (
                                <a key={issue.id} href={issue.html_url}>
                                    <div>
                                        <strong>{issue.title}</strong>
                                        <p>{issue.user.login}</p>
                                    </div>
                                    <FiChevronRight size={18} />
                                </a>
                            ))}
                        </Issues>
                    )}
                </>
            )}
        </>
    );
};

export default Repository;
