import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.less';

import Entry from './router';
import registerServiceWorker from './registerServiceWorker';

window.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
if(!(window.userInfo)){
    window.userInfo={isLogin:false};
}

ReactDOM.render(<Entry />, document.getElementById('root'));
registerServiceWorker();
