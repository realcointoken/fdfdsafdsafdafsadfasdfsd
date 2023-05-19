import Web3 from "web3";

const rpcsStatus = async () => {
	const aurWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
		)
	);
	const aurd = await aurWeb3js.eth.getBlockNumber();

	const rpcsa = {
		title: "Aurora RPC",
		key: "aurora",
		status: !!aurd,
	};

	return rpcsa;
};

export default rpcsStatus;
