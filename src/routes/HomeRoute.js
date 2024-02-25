import Hero from '../components/Hero';
import RepositoriesTable from '../components/repositories/RepositoriesTable';
import useRepositories from '../hooks/useRepositories';

function HomeRoute() {
  const { data: jsRepos } = useRepositories('stars:>10000 language:javascript');
  const { data: tsRepos } = useRepositories('stars:>10000 language:typescript');
  const { data: rustRepos } = useRepositories('stars:>10000 language:rust');
  const { data: goRepos } = useRepositories('stars:>10000 language:go');
  const { data: javaRepos } = useRepositories('stars:>1000 language:java');
  const { data: pythonRepos } = useRepositories('stars:>1000 language:python');

  const datas = [
    {
      id: 1,
      label: 'Most Popular Javascript',
      repositories: jsRepos,
    },
    {
      id: 2,
      label: 'Most Popular Typescript',
      repositories: tsRepos,
    },
    {
      id: 3,
      label: 'Most Popular Rust',
      repositories: rustRepos,
    },
    {
      id: 4,
      label: 'Most Popular Go',
      repositories: goRepos,
    },
    {
      id: 5,
      label: 'Most Popular Java',
      repositories: javaRepos,
    },
    {
      id: 6,
      label: 'Most Popular Python',
      repositories: pythonRepos,
    },
  ];

  return (
    <div>
      <Hero />
      <div className='container mx-auto py-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
        {/* <RepositoriesTable
          label='Most Popular Javascript'
          repositories={jsRepos}
        />
        <RepositoriesTable
          label='Most Popular Typescript'
          repositories={tsRepos}
        />
        <RepositoriesTable label='Most Popular Rust' repositories={rustRepos} />
        <RepositoriesTable label='Most Popular Go' repositories={goRepos} />
        <RepositoriesTable label='Most Popular Java' repositories={javaRepos} />
        <RepositoriesTable
          label='Most Pouplar Python'
          repositories={pythonRepos}
        /> */}
        {datas.map((data) => {
          return (
            <RepositoriesTable
              key={data.id}
              label={data.label}
              repositories={data.repositories}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeRoute;
