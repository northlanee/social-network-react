import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessage, messageChange} from "../../redux/messages-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages,
        dialogs: state.messagesReducer.dialogs,
        newMessageValue: state.messagesReducer.newMessageValue
    }
};

const MessagesContainer = withAuthRedirect(connect(mapStateToProps, {messageChange, addMessage})(Messages));

export default MessagesContainer;
