import React from 'react';

function FeaturedWork(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <a className="repo-link my-1" href={props.repoLink}>
        View GitHub Repository
      </a>
      {props.description.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <a className={props.workClass + ' rounded-3'} href={props.picLink}></a>
    </>
  );
}

export default FeaturedWork;
