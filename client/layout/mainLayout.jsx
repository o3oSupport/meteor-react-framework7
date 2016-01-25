import React from 'react';

const MainLayout = ({content}) => (
    <div>
      <header>
      </header>
      <main>
        {content()}
      </main>
    </div>
);

export default MainLayout;
