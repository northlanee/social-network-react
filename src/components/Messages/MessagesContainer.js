import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessage, messageChange} from "../../redux/messages-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages,
        dialogs: state.messagesReducer.dialogs,
        newMessageValue: state.messagesReducer.newMessageValue
    }
};

export default compose(
    connect(mapStateToProps, {messageChange, addMessage}),
    withAuthRedirect
)(Messages);
