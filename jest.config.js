module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
	],
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.style.ts'],

	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'.+\\.svg?.+$': '<rootDir>/__mocks__/fileMock.js',
		'^@/(.*)': '<rootDir>/src/$1',
		'\\.(css|less)$': 'identity-obj-proxy'
	}
}
