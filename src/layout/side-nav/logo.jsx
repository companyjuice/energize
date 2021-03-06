import React from 'react';
import cx from 'classnames';

const SideNavLogo = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {
    let classes = cx(this.props.className, 'logo-wrapper');

    return (
      <li {...this.props} className={classes}>
        <div className="logo">{this.props.children}</div>
      </li>
    );
  },

});

export default SideNavLogo;
