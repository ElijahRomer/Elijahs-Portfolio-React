import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Card from '../components/ui/Card';
import Image from '../components/ui/Image';
import Row from '../components/ui/Row';
import profilePicture from '../images/profilePicture.jpg';

function BioPage() {
  return (
    <Card>
      <Row>
        <h1 className="text-center">Hello! I'm Elijah Romer.</h1>
        <div className="row my-2">
          <LinkContainer to="/work">
            <button className="btn btn-primary col-sm-10 col-md-4 mx-auto">
              View my work <i className="fas fa-arrow-right"></i>
            </button>
          </LinkContainer>
        </div>
      </Row>
      <hr />
      <Row>
        <Image src={profilePicture} alt="Elijah Romer"></Image>
      </Row>
    </Card>
  );
}

export default BioPage;
