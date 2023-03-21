import React from 'react'

export default function ShowError({text,color}) {
    return (
        <small style={{ color: color}}>
            {text}
        </small>
    )
}
