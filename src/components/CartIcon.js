import classes from './CartIcon.module.css';
const cartIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" 
            // xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
            // width="256" height="256" viewBox="0 0 256 256" 
            width="50" height="50" viewBox="10 00 100 100" 
            // xml:space="preserve"
            >

            <defs>
            </defs>
            <g className={classes.g}>
                <path className={classes.d1} d="M 24.158 57.596 h 54.898 c 2.293 0 4.313 -1.509 4.964 -3.709 l 5.841 -19.759 c 0.633 -2.141 -0.972 -4.289 -3.204 -4.289 H 16.95 L 24.158 57.596 z"/>
                <path className={classes.d2} d="M 79.585 70.399 H 27.091 c -0.687 0 -1.287 -0.464 -1.46 -1.129 L 14.404 26.034 c -0.421 -1.62 -1.883 -2.751 -3.557 -2.751 H 1.508 C 0.675 23.283 0 22.608 0 21.775 s 0.675 -1.508 1.508 -1.508 h 9.339 c 3.048 0 5.711 2.06 6.476 5.01 l 10.935 42.106 h 51.327 c 0.833 0 1.508 0.676 1.508 1.508 C 81.093 69.724 80.417 70.399 79.585 70.399 z" />
                <circle className={classes.circle1} cx="36.176" cy="80.946" r="6.536"/>
                <circle className={classes.circle2} cx="69.15599999999999" cy="80.946" r="6.536" />
                <path d="M 43.198 35.321 c -0.57 0 -1.137 -0.179 -1.621 -0.53 c -0.856 -0.623 -1.277 -1.657 -1.098 -2.7 l 1.379 -8.044 c 0.042 -0.247 -0.039 -0.498 -0.218 -0.673 l -5.845 -5.697 c -0.758 -0.739 -1.025 -1.823 -0.698 -2.83 s 1.181 -1.727 2.228 -1.879 l 8.077 -1.173 c 0.248 -0.036 0.462 -0.191 0.572 -0.416 l 3.613 -7.319 c 0.468 -0.949 1.416 -1.539 2.476 -1.539 c 1.059 0 2.007 0.59 2.475 1.539 l 3.612 7.319 c 0.111 0.224 0.325 0.38 0.573 0.416 l 8.076 1.173 c 1.048 0.152 1.901 0.873 2.228 1.879 c 0.327 1.007 0.06 2.091 -0.698 2.831 l -5.844 5.696 c -0.18 0.175 -0.262 0.427 -0.22 0.674 l 1.38 8.043 c 0.179 1.044 -0.242 2.078 -1.099 2.7 c -0.855 0.622 -1.971 0.702 -2.906 0.21 l -7.225 -3.798 c -0.222 -0.118 -0.486 -0.116 -0.707 0 l -7.225 3.798 C 44.077 35.215 43.636 35.321 43.198 35.321 z" />
            </g>
        </svg>
	)

}
export default cartIcon;