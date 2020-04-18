import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Component } from './styles';

function Input({ name, label, ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, defaultValue = '', registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value'
		});
	}, [fieldName, registerField]);

	return (
		<Component>
			{label && <label htmlFor={fieldName}>{label}</label>}
			<input ref={inputRef} defaultValue={defaultValue} {...rest} />
		</Component>
	);
}

export default Input;
