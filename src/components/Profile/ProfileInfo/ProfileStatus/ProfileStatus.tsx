import React, {ChangeEvent} from 'react';

type PropsType ={
    status: string
    updateStatus: (newStatus:string) => void

}
type StateType ={
    editMode: boolean
    status: string
}


class ProfileStatus extends React.Component<PropsType,StateType>{
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
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }


    componentDidUpdate(prevProps:Readonly<PropsType>, prevState:Readonly<StateType>) {
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