import React from "react";
import GistForks from "./GistForks";

type Props = {
  gists: any[];
};

const GistsList = ({ gists }: Props) => {
  return (
    <div className="">
      {gists.map((gist: any) => (
        <div className="gist" key={gist.id}>
          <div>
            <div className="gist__header">
              <h3 className="gist__title">
                {gist.description || "No Description"}
              </h3>
              <p className="gist__date">
                {new Date(gist.created_at).toDateString()}
              </p>
            </div>
            <div className="gist__file-tags">
              {Object.keys(gist.files)
                .map((file: any) => gist.files[file].language)
                .map((language: string) => (
                  <div className="gist__file-tag badge" key={language}>
                    <p className="gist__file-tag-name">{language}</p>
                  </div>
                ))}
            </div>
            <GistForks forksUrl={gist.forks_url}></GistForks>
          </div>
          <div className="gist__body">
            <div className="gist__files">
              {Object.keys(gist.files).map((file: any) => (
                <div className="gist__file" key={file}>
                  <p className="gist__file-name">{file}</p>
                  <p className="gist__file-size">
                    {gist.files[file].size} bytes
                  </p>
                </div>
              ))}
            </div>
            <div className="gist__actions">
              <a
                href={gist.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="gist__action"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GistsList;
