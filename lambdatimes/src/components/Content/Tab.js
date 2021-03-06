import React from 'react';
import PropTypes from 'prop-types';

// Tabs props: selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab}

const Tab = props => {
  // console.log(props.tab);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      if(props.tab === props.selectedTab) {
        return (
          <div
            id={props.tab}
            className='tab active-tab'
            onClick={props.selectTabHandler}
              /* Replace this dummy click handler function with your selectTabHandler function from props 
               you'll need to pass the `tab` in as an argument to this handler. */
        
          >
            {props.tab.toUpperCase()}
          </div>
        );
      }
      else {
        return (
          <div
            id={props.id}
            className='tab'
            onClick={props.selectTabHandler}
              /* Replace this dummy click handler function with your selectTabHandler function from props 
               you'll need to pass the `tab` in as an argument to this handler. */
          >
            {props.tab.toUpperCase()}
          </div>
        )
      }

//   return (
//     <div
//       className={''}
//       onClick={() => {
//         /* Replace this dummy click handler function with your selectTabHandler function from props 
//          you'll need to pass the `tab` in as an argument to this handler. */
//       }}
//     >
//       {props.tab.toUpperCase()}
//     </div>
//   );

};

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

// Make sure you include PropTypes on your props.

export default Tab;