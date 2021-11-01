import React from 'react';
import Card from '../components/ui/Card';
import FeaturedWork from '../components/ui/FeaturedWork';
import WorkRow from '../components/ui/WorkRow';
import WorkSample from '../components/ui/WorkSample';

import worksData, { featuredWorkData } from '../data/data';

function WorkPage() {
  return (
    <Card>
      <h1 className="text-center">WORK</h1>
      <h6 className="text-center">
        Click each picture to be taken to the deployed website, or GitHub
        repository if the application is not a website.
      </h6>
      <hr />
      <WorkRow>
        <FeaturedWork
          title={featuredWorkData.title}
          repoLink={featuredWorkData.repoLink}
          description={featuredWorkData.description}
          workClass={featuredWorkData.workClass}
          picLink={featuredWorkData.picLink}
        />
      </WorkRow>
      <hr />
      <WorkRow>
        {worksData.map((work) => (
          <WorkSample
            title={work.title}
            repoLink={work.repoLink}
            description={work.description}
            workClass={work.workClass}
            picLink={work.picLink}
          />
        ))}
      </WorkRow>
    </Card>
  );
}

export default WorkPage;
