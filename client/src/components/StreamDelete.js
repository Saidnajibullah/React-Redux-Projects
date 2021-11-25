import Modal from "./Modal";
import { connect } from "react-redux";
import { deleteStream, showModal } from "../actions";
const StreamDelete = (props) => {
    const action = () => props.deleteStream(props.id);
    const hideModal = () => props.showModal(false);
    const HEADER = 'Delete Stream';
    const CONTENT = 'Are you sure you want to delete the stream?';
    const BTN1_LABEL = 'NO';
    const BTN2_LABEL = 'YES';
    return <Modal action={action} hideModal={hideModal} header={HEADER} content={CONTENT} btn1Label={BTN1_LABEL} btn2Label={BTN2_LABEL} />
}
export default connect(null, { deleteStream, showModal })(StreamDelete);