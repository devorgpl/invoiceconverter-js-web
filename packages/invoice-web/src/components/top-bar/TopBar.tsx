import React from 'react';

function TopBar(): React.ReactElement {
    return (
      <div className="TopBar">
        <a href="/">Main</a>
        <a href="/convert">Convert</a>
      </div>
    );
}

export default TopBar;
