import React from "react";
import { AllGistsUrl } from "../helpers/url";
import Divider from "./Divider";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Title from "./Title";

type Props = {};

const Main = (props: Props) => {
  const [gists, setGists] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const searchByUsername = async (username: string) => {
    if (!username) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);
    setGists([]);
    try {
      const URL = AllGistsUrl(username);
      const response = await fetch(URL);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setGists(data);
      if (data.length === 0) setError(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setUsername(username);
    }
  };

  console.log({ gists, loading, error });

  return (
    <div>
      <Title text="GitHub GIST Search API Demo" />
      <Divider>Search Gists by User</Divider>
      <SearchInput searchByUsername={searchByUsername} />
      <SearchResults
        gists={gists}
        loading={loading}
        error={error}
        username={username}
      />
    </div>
  );
};

export default Main;
