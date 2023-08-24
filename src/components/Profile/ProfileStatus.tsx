import React, {ChangeEvent, useEffect, useState,
    // useEffect, useState
} from 'react';

type ProfileStatusProps = {
    status: string,
    UpdateStatus: (status: string) => void
}
// export class ProfileStatus extends React.Component<ProfileStatusProps> {
//     state = {editMode: false,
//     status: this.props.status}
//     onChange = (event: ChangeEvent<HTMLInputElement>) => {
//         this.setState({status:event.currentTarget.value})
//     }
//     editModeOff = () => {
//         this.setState({editMode: false})
//         this.props.UpdateStatus(this.state.status)
//     }
//      editModeOn = () => {
//          this.setState({editMode: true})
//     }
//     componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {
//         if (prevProps.status !==this.props.status) {
//             this.setState({status:this.props.status})
//         }
//     }
//
//     render() {
//         return (
//         <div>
//             <h5>Status:</h5>
//             {this.state.editMode
//                 ? <input autoFocus onBlur={this.editModeOff}
//                               value={this.state.status}
//                               onChange={this.onChange}
//                               placeholder={"Status"}
//                               type='text'
//                 />
//                 :
//                 <span onDoubleClick={this.editModeOn}>{this.props.status || 'Empty status' }</span>}
//         </div>
//     )
//     }
// }

export const ProfileStatus = (props: ProfileStatusProps) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    const editModeOff = () => {
        setEditMode(false)
        props.UpdateStatus(status)
    }
    const editModeOn = () => {
        setEditMode(true)
    }

    return (
        <div>
            <h5>Status:</h5>
            {editMode
                ? <input autoFocus onBlur={editModeOff}
                              value={status}
                              onChange={onChange}
                              placeholder={"Status"}
                              type='text'
                />
                :
                <span onDoubleClick={editModeOn}>{props.status || 'Empty status' }</span>}
        </div>
    )
}