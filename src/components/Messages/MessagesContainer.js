import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageChangeActionCreator} from "../../redux/messages-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages,
        dialogs: state.messagesReducer.dialogs,
        newMessageValue: state.messagesReducer.newMessageValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (text) => {
            dispatch(updateMessageChangeActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
