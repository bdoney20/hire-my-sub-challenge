import React from 'react';

const Message = props => {
        return (
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 pb-5" role="alert">
                    <p className="font-bold">{props.message}</p>
            </div>
        )
}

export default Message;