import React from 'react';
import useInputs from "../hooks/useInputs";


const UseInputContainer = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickName: ''
    });
    const { name, nickName } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickName" value={nickName} onChange={onChange} />
            </div>
            <div>
                이름 : {name}<br/>
                닉네임 : {nickName}
            </div>
        </div>
    );
};


export default UseInputContainer;

