import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
if (module.hot) {
    module.hot.accept();
  }
const data = [
  {author: 'Jamal', date: 'Today at 3:15AM', text: 'Wonderful post'},
  {author: 'Gophy', date: 'Yesterday at 2:30AM', text: 'Ausome, I got you coverd'},
  {author: 'Nila', date: 'Today at 4:00PM', text: 'Thanks a lot for caring'},
]

/**
 * using functions to create components is not common anymore as it has some restrictions:
 * 1. does not have access to the state system.
 * 2. cannot call life-cycle hooks.
 */
const App = () => <div style={{marginTop: '10px'}} className="ui container comments">
  {data.map((post, i) => {
    return <ApprovalCard key={i}><Comment post={post} /></ApprovalCard>
  })}
</div>
ReactDOM.render(<App />, document.getElementById('root'))