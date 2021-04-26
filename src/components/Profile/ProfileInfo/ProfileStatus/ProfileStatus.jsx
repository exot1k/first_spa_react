import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    changeEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={() => {

                            this.changeEditMode()
                        }}> {this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={() => {
                            this.changeEditMode()
                        }
                        } value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }

}

export default ProfileStatus;