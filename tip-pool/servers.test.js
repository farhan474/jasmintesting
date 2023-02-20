
describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should update server table when allServers is updated on updateServerTable()', function () {

		serverId++;
		let serverName = 'Alice';
		allServers['server' + serverId] = { 'serverName': serverName };

		updateServerTable();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	afterEach(function () {
		serverName.value = ''
		allServers = {};
		serverId = 0;
		updateServerTable()
	});


});
