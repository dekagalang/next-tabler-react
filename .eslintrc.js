module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"es2020": true,
		"node": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {  
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
		"react/prop-types": [2, { ignore: ['children'] }],
   },
   "globals": {
		"React": "writable"
	},
	"settings": {
		"react": {
			"version": "detect",
		}
	}
};
