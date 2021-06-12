import React from 'react';

import * as providers from './contexts';

const ContextProvider: React.FC = ({ children }) => (
	<providers.ArrayProvider>
		<providers.StatusProvider>{children}</providers.StatusProvider>
	</providers.ArrayProvider>
);

export default ContextProvider;