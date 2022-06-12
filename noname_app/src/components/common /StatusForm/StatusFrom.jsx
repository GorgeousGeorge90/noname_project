import {useEffect, useState} from 'react';


const StatusFrom = ()=>{
    const [status, setStatus] = useState(() => {
        const localData = localStorage.getItem('status')
        return localData ? JSON.parse(localData) : ''
    })
    const [mode,setMode] = useState({
        editMode: false,
    })
    const activateMode = () => setMode({
        editMode: true,
    })
    const deactivateMode = () => setMode({
        editMode: false,
    })
    const updateStatus = (e)=> {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        localStorage.setItem('status',JSON.stringify(status))
    }, [status])

    return (
        <div>
            {
                !mode.editMode &&
                <span onDoubleClick={activateMode}>{status || 'status...'}</span>
            }
            {
                mode.editMode &&
                <input onBlur={deactivateMode}
                       onChange={updateStatus}
                       value={status}
                       placeholder='Status'/>
            }
        </div>
    )
}

export default StatusFrom
