import releases from "./releases.js";

const latest = releases.find((r) => r.latest);

export default latest || releases[0];
