import React from 'react';
import {connect} from 'react-redux';

 function Footer({count,total}) {
  return (
    <div>
        <h4>Count: {count}</h4>
        <h4>Total: {total}</h4>
    </div>
  )
}
const mapStateToProps = (store)=>{
return {
    count: store.count,
    total: store.total,
}
};

export default connect(mapStateToProps)(Footer)