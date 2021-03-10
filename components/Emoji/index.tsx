import React from 'react';

interface IEmojiComponentProps {
    symbol: string;
    label: string;
}

const Emoji = (props: IEmojiComponentProps) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Emoji;