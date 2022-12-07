import React from "react";
import GistsList from "./GistsList";
import Loader from "./Loader";

type Props = {
  gists: any[];
  loading: boolean;
  error: boolean;
  username: string;
};

const SearchResults = ({ gists, loading, error, username }: Props) => {
  return (
    <div className="search-results">
      {loading && <Loader />}
      {error && (
        <div className="alert alert-danger">
          <p>No gists found for this user</p>
        </div>
      )}
      {gists.length > 0 && (
        <div className="results">
          <div className="alert alert-success">
            <p>
              {gists.length} {username}'s gists found
            </p>
          </div>
          <GistsList gists={gists} />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
