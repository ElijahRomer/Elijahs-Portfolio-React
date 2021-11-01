import React from 'react';
import Card from '../components/ui/Card';

function BioPage() {
  return (
    <Card>
      <div class="row my-4">
        <h1 class="text-center">Hello! I'm Elijah Romer.</h1>
        <div class="row my-2">
          <button class="btn btn-primary col-sm-10 col-md-4 mx-auto" id="work">
            View my work <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <hr />
    </Card>
  );
}

export default BioPage;
