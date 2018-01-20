import React from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';

const PageShell = Page => {
  return props =>
    <div className="page">
      <CSSTransitionGroup
        timeout={200}
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >
        <Page {...props} />
      </CSSTransitionGroup>
    </div>;
};

export default PageShell;

//transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}
