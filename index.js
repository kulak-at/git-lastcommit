var child_process = require('child_process');

module.exports = function() {
	return {
		'last_commit': child_process.execSync('git log --oneline -1', { encoding: 'utf8' }),
		'nearest_tag': child_process.execSync('git describe --abbrev=0', { encoding: 'utf8' })
	};
};
