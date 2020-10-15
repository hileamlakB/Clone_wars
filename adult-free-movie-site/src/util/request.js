const apiKey = "dceea360199e855fe955f18ddd66d5b6";
const commonUrl = `/discover/movie?api_key=${apiKey}&include_adult=false&include_video=true&with_genres=`;

const request = {
	fetchAnim: `${commonUrl}16`,
	fetchAction: `${commonUrl}28`,
	fetchComedy: `${commonUrl}35`,
	fetchFamily: `${commonUrl}10751`,
	fetchScifi: `${commonUrl}878`,
	fetchAdventure: `${commonUrl}12`,
	fetchNetflix: `discover/tv?api_key=${apiKey}&with_networks=213`,
};

export default request;
