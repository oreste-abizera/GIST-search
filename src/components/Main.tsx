import React from "react";
import Divider from "./Divider";
import SearchInput from "./SearchInput";
import Title from "./Title";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Title text="GitHub GIST Search API Demo" />
      <Divider>Search Gists by User</Divider>
      <SearchInput />
    </div>
  );
};

export default Main;
