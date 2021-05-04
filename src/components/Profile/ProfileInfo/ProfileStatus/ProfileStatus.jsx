import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode = () => {
        this.setState({editMode: !this.state.editMode})
        if (this.state.editMode) {
            this.props.updateStatus(this.state.status);
        }

    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) {
            this.setState({status: this.props.status})
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={() => {
                            this.changeEditMode()
                        }}> {this.props.status || "Введите статус"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {
                            this.changeEditMode()
                        }
                        } value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }

}

export default ProfileStatus;