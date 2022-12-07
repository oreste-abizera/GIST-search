import React from "react";

type Props = {
  searchByUsername: (username: string) => void;
};

const SearchInput = ({ searchByUsername }: Props) => {
  const [username, setUsername] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchByUsername(username);
  };
  return (
    <form className="search-input" onSubmit={handleSearch}>
      <input
        placeholder="Enter Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
