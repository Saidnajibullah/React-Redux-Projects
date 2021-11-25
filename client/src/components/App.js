import {Router, Route} from 'react-router-dom';
import history from '../history';
import StreamList from './StreamList';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamView from './StreamView';
import Header from './Header';
const App = ()=>{
    return(
        <div className='ui container' style={{marginTop: '10px'}}>
            
            <Router history={history}>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/create' component={StreamCreate} />
                <Route path='/edit/:id' component={StreamEdit} />
                {/* <Route path='/delete' component={StreamDelete} /> */}
                <Route path='/view/:id' component={StreamView} />
            </Router>
        </div>
    )
}
export default App;