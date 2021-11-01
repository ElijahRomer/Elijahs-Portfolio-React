import React from 'react';
import Card from '../components/ui/Card';
import WorkRow from '../components/ui/WorkRow';
import WorkSample from '../components/ui/WorkSample';
import { LinkContainer } from 'react-router-bootstrap';
import './Work.css';

function WorkPage() {
  return (
    <Card>
      <h1 className="text-center">WORK</h1>
      <h6 className="text-center">
        Click each picture to be taken to the deployed website, or GitHub
        repository if the application is not a website.
      </h6>
      <hr />
      <div className="row col-11 my-4 mx-auto">
        <h3>wandir</h3>
        <a
          className="repo-link my-1"
          href="https://github.com/FullstackNomads/wandir"
        >
          View GitHub Repository
        </a>
        <p>
          An app for organizing and meeting with other people who are passionate
          about travel! This project was my first real step into creating an
          application utilizing MVC architecture. It was a sprint to complete as
          much functionality as possible in the span of two weeks, with 3 other
          team members. A very enjoyable learning experience, it utilizes
          Express, Express-handlebars view engine, Express-session for login
          persistence via cookies, Sequelize ORM for modeling/ mapping to a
          custom SQL relational database, Multer and AWS-SDK modules for image
          uploads, and more.
        </p>
        <p>
          {' '}
          I was tasked with building most of the back end & database, and
          managing the git workflow from individual feature branches on up to
          the main branch and deployment via Heroku. As of this writing, the app
          is 90% complete.
        </p>
        <p>
          The development of this project truly solidified my understanding of
          Express servers, middleware, and routing. I have come to see
          view-engines as virtually indispensible to modern websites. I also see
          the immense benefit provided by Object Relational Mapping (ORM) such
          as Sequelize, and gained a firm grasp on that technology as well.
        </p>
        <a
          className="wandir rounded-3"
          href="https://fullstacknomads.herokuapp.com/"
        ></a>
      </div>
      <hr />
      <WorkRow>
        <WorkSample
          title="README Generator"
          workClass="readme-generator"
          picLink="https://github.com/ElijahRomer/ReadMeGenerator#readme"
        >
          <p>
            A simple CLI interface application that streamlines the process of
            creating a README file for your projects, saving time and energy for
            coding. Developing this project was my first serious exercise in
            utilizing, troubleshooting, and executing JavaScript files within
            the Node.js runtime. I learned how to create my own npm modules, and
            create custom commands to initialize them anywhere. The Inquirer
            module opened my eyes to the possibilities of CLI interface
            applications.{' '}
          </p>
        </WorkSample>
      </WorkRow>
    </Card>
  );
}

export default WorkPage;
