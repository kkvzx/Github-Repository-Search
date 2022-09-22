import React, {createContext, useState} from 'react';
import mockRepos from './mockData/mockRepos';

interface Props {
  readonly children: React.ReactNode;
}

const rootUrl = 'https://api.github.com/';
export const GithubContext = React.createContext<any>(null);

export const GithubProvider: React.FC<Props> = ({children}) => {
  const [repos, setRepos] = useState(mockRepos);
  return <GithubContext.Provider value={repos}>{children}</GithubContext.Provider>;
};
