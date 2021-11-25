import './Loader.css'
const Loader = (props) => (
    <div style={{display: props.showLoader}} className='loader-overlay'>
        <div className="ui active dimmer">
                <div className="ui text loader">Loading...</div>
        </div>
    </div>
)
export default Loader;