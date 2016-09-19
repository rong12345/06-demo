import React, { PropTypes } from 'react';
import marked from 'marked';
// console.log(marked('I am using_markdown_.'));
class Marked extends React.Component {
  render () {
    let content = marked('# 我是h1');
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )

  }
}
export default Marked;
