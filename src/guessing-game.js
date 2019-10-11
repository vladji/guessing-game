class GuessingGame {
	constructor() {
		this.leftSide = null;
		this.rightSide = null;
		this.min = null;
		this.max = null;
		this.result = null;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;

		const indexMax = max - 1;
		let indexMin = null;
		if (min === 0) {
			indexMin = min;
		} else {
			indexMin = min - 1;
		}

		const halfRange = Math.floor((indexMax + indexMin) / 2);
		const num = halfRange + 1;
		this.result = num;

		this.leftSide = num;
		this.rightSide = num + 1;
	}

	guess() {
		return this.result;
	}

	lower() {
		this.setRange(this.min, this.leftSide);
	}

	greater() {
		this.setRange(this.rightSide, this.max);
	}
}

module.exports = GuessingGame;
