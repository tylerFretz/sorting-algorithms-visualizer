import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme());

theme.props = {
	MuiButtonBase: {
		disableRipple: true,
	},
	MuiButton: {
		disableElevation: true
	},
	MuiIconButton: {
		disableRipple: true,
		disableFocusRipple: true
	}
};

theme.overrides = {
	MuiButton: {
		contained: {
			'&hover': {
				backgroundColor: '#555555'
			}
		},
		startIcon: {
			marginLeft: 0,
			marginRight: 0
		}
	}
};

export default theme;