import React from 'react';

function WorkSample(props) {
  return (
    <div className="col-md-10 col-lg-5 my-4 mx-auto">
      <h4>{props.title}</h4>
      <a class="repo-link my-1" href={props.repoLink}>
        View GitHub Repository
      </a>
      <p>{props.description}</p>
      <a
        class={props.workClass + ' rounded-3 d-block'}
        href={props.picLink}
      ></a>
    </div>
  );
}

export default WorkSample;
