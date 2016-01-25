import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import MainLayout from '../layout/mainLayout';
import NoMatch from '../layout/noMatch';

import Home from '../template/home';
import Page from '../template/page';
import More from '../template/more';

FlowRouter.route('/',{
  action(){
    mount(MainLayout, {
      content: () => (<Home />)
    });
  }
});


FlowRouter.route('/page',{
  action(){
    mount(MainLayout, {
      content: () => (<Page />)
    });
  }
});

FlowRouter.route('/more',{
  action(){
    mount(MainLayout, {
      content: () => (<More />)
    });
  }
});


FlowRouter.notFound = {
  name: '404 Not Found',
  action(){
    mount(NoMatch);
  }
};

FlowRouter.initialize();
