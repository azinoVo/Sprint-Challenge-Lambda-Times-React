import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

// Props from Content: selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs}
// tabData = ['all', 'javascript', 'technology', 'node', 'React.js', 'bootstrap'];

const Tabs = props => {
console.log(props.tabs);

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab,index) =>
              <Tab key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
            )}
      </div>
    </div>

  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.oneOf([
      'all',
      'javascript',
      'technology',
      'node',
      'React.js',
      'bootstrap'
    ])
  ),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};



// Make sure to use PropTypes to validate your types!
export default Tabs;
