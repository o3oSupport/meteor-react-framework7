import React from 'react';
import ReactDOM from 'react-dom';

import {mount,withOptions} from 'react-mounter';
const mounter = withOptions({
    rootProps: {'className': 'views'}
}, mount);

import MainLayout from '../layout/mainLayout';
import NoMatch from '../layout/noMatch';

import Home from '../template/home';
import Page from '../template/page';
import More from '../template/more';

const myApp = new Framework7({
  pushState: true,
  swipePanel: 'left',
  router: false
});
const $$ = Dom7;

// const mainView = myApp.addView('.view-main')

FlowRouter.route('/',{
  action(){
    mounter(MainLayout, {
      content: () => (<Home />)
    });
  }
});


FlowRouter.route('/page',{
  action(){
    mounter(MainLayout, {
      content: () => (<Page />)
    });
  }
});

FlowRouter.route('/more',{
  action(){
    mounter(MainLayout, {
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
