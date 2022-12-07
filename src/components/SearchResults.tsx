import React from "react";
import Loader from "./Loader";

type Props = {
  gists: any[];
  loading: boolean;
  error: boolean;
};

const SearchResults = ({ gists, loading, error }: Props) => {
  return (
    <div className="search-results">
      {loading && <Loader />}
      {error && (
        <div className="alert alert-danger">
          <p>No gists found for this user</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
