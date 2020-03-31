import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    editModeOn = () => this.setState({editMode: true});
    editModeOff = () => {
        this.props.updateStatus(this.state.status);
        this.setState({editMode: false});
    };
    onStatusInput = e => {
        this.setState({ status: e.target.value });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            debugger
            this.setState({ status: this.props.status });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onClick={this.editModeOn}>{this.state.status || 'No status'}</span>
                    :
                    <input onChange={this.onStatusInput} autoFocus={true} type="text" value={this.state.status} onBlur={this.editModeOff}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;
