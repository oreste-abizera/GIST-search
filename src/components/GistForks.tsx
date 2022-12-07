import React from "react";

type Props = {
  forksUrl: string;
};

const GistForks = ({ forksUrl }: Props) => {
  const [forks, setForks] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetchForks = async (url: string) => {
    setLoading(true);
    setError(false);
    setForks([]);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setForks(data.slice(0, 3));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchForks(forksUrl);
  }, [forksUrl]);

  return (
    <div className="gist-forks">
      <h4>Latest Forks</h4>
      <div>
        {!loading && forks.length === 0 && <p>No forks found</p>}
        {forks.map((fork) => (
          <a
            key={fork.id}
            href={fork.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {/* avatar */}
            <img src={fork.owner.avatar_url} alt={fork.owner.login} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GistForks;
