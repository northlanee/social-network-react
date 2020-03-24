import {addMessageActionCreator, updateMessageChangeActionCreator} from "../../../redux/messages-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
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

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
