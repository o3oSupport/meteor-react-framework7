import React from 'react';
import ReactDOM from 'react-dom';

import {mount,withOptions} from 'react-mounter';
const mounter = withOptions({
    rootId: 'react-root'
}, mount);

import MainLayout from '../layout/mainLayout';
import NoMatch from '../layout/noMatch';


import Page from '../template/page';
import More from '../template/more';

//发布服务
import Publish from '../template/publish';
//个人资料
import Usercenter from '../template/usercenter';
//业聊
import Index from '../template/index';
import Home from '../template/home';

import {Account,Register,Login} from '../template/account/app';


FlowRouter.route('/home',{
  action(){
    mounter(Home);
  }
});

FlowRouter.route('/account',{
  action(){
    mounter(Account);
  }
});

FlowRouter.route('/login',{
  action(){
    mounter(MainLayout,{
      content: () => (<Login />)
    });
  }
});

FlowRouter.route('/register',{
  action(){
    mounter(MainLayout,{
      content: () => (<Register />)
    });
  }
});

FlowRouter.route('/',{
  action(){
    mounter(MainLayout, {
      content: () => (<Index />)
    });
  }
});

FlowRouter.route('/publish',{
  action(){
    mounter(MainLayout,{
      content: () => (<Publish />)
    });
  }
});

FlowRouter.route('/usercenter',{
  action(){
    mounter(MainLayout,{
      content: () => (<Usercenter />)
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

FlowRouter.route('/layout',{
  action(){
    mounter(MainLayout);
  }
})

FlowRouter.notFound = {
  name: '404 Not Found',
  action(){
    mount(NoMatch);
  }
};

FlowRouter.initialize();
