import Accordion from '../components/Accordion';
import SearchDropDown from './SearchDropDown';
import SearchWiki from './SearchWiki';
import { accordionData, countries, languages } from './data'
import Translate from './Translate';
import Header from './Header';
import Route from './Route';
//import PageNotFound from './PageNoteFound'

//implementing a basic routing logic
//NOTE: to make it more reusable, we can create a Route component!!!
// function navigateTo(){
//   if(window.location.pathname === '/') return <Accordion data={accordionData} />
//   else if(window.location.pathname === '/wiki') return <SearchWiki />
//   else if(window.location.pathname === '/dropdown') return <SearchDropDown options={countries} defaultOption='Select Country' hasIcon={true} />
//   else if(window.location.pathname === '/translate') return <Translate options={languages} defaultOption={languages[0]} />
//   else return <PageNotFound />
// }
//====================================

function App() {
  if(window.closed) alert('hey...')
  //const getOption = option =>{}
  return (
    <div style={{width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', flexDirection: 'column'}}>
      <Header />
      {/* {navigateTo()} */}
      <Route path='/'><Accordion data={accordionData} /></Route>
      <Route path='/wiki'><SearchWiki /></Route>
      <Route path='/dropdown'><SearchDropDown options={countries} defaultOption='Select Country' hasIcon={true} /></Route>
      <Route path='/translate'><Translate options={languages} defaultOption={languages[0]} /></Route>
    </div>
  );
}
export default App;