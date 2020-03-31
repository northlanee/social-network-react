import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    editModeOn = () => this.setState({editMode: true});
    editModeOff = () => this.setState({editMode: false});

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.editModeOn}>status</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} type="text" value="status" onBlur={this.editModeOff}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
