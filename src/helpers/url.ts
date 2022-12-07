const BASE_URL = "https://api.github.com";

const AllGistsUrl = (username: string) => {
  return `${BASE_URL}/users/${username}/gists`;
};

const SingleGistUrl = (gistId: string) => {
  return `${BASE_URL}/gists/${gistId}`;
};

export { AllGistsUrl, SingleGistUrl };
