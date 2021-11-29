const contractAddress = '0xE33B15629739770a27c4726a22BE61128aa1c781';
const withdrawHex = '0x2e1a7d4d0000000000000000000000000000000000000000000000000000000000000000';
const unstakeHex = '0x2e17de780000000000000000000000000000000000000000000000000000000000000000';
const connectBTN = document.getElementById('connectBTN');
const unstakeBTN = document.getElementById('unstakeBTN');
const withdrawBTN = document.getElementById('withdrawBTN');

const scanURL = "<a href'https://etherscan.io/tx/' "

const initialize = async () => {
    var accounts;
    console.table(connectBTN);
    var metamaskInstalled = false;
    if (typeof window.ethereum !== 'undefined') {
        metamaskInstalled = true;
        connectBTN.disabled = false;
        console.table(metamaskInstalled);
    }

   
    const onClickConnect = async () => {
        if (metamaskInstalled === true ){
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if(accounts.length > 0){
                unstakeBTN.disabled = false;
                withdrawBTN.disabled = false;
                connectBTN.disabled = true;
                document.getElementById("connectText").innerHTML = 'Connected to';
                document.getElementById("connectBTN").value = accounts[0];
            }
        } 
    }

    const onClickUnstake = async () =>{
                            if(accounts.length > 0){
                                ethereum
                                    .request({
                                        method: 'eth_sendTransaction',
                                        params: [
                                        {
                                            from: accounts[0],
                                            to: contractAddress,
                                            data: unstakeHex,
                                            gasLimit: '300000',
                                            type: '2',
                                            value: '0'
                                        }
                                        ]
                                    })
                                    .then((result) => {
                                        document.getElementById('statusUnstake').innerHTML = scanURL + result + " /a>";
                                        // console.log('result');
                                        // console.table(result);
                                        // The result varies by RPC method.
                                        // For example, this method will return a transaction hash hexadecimal string on success.
                                    })
                                    .catch((error) => {
                                        console.log('error');
                                        console.table(error);
                                        // If the request fails, the Promise will reject with an error.
                                    });
                                }
                            }

    const onClickWithdraw = async () =>{
                                if(accounts.length > 0){
                                    ethereum
                                        .request({
                                            method: 'eth_sendTransaction',
                                            params: [
                                            {
                                                from: accounts[0],
                                                to: contractAddress,
                                                data: withdrawHex,
                                                gasLimit: '300000',
                                                type: '2',
                                                value: '0'
                                            }
                                            ]
                                        })
                                        .then((result) => {
                                            document.getElementById('statusWithdraw').innerHTML = scanURL + result + " /a>";
                                            // console.log('result');
                                            // console.table(result);
                                            // The result varies by RPC method.
                                            // For example, this method will return a transaction hash hexadecimal string on success.
                                        })
                                        .catch((error) => {
                                            console.log('error');
                                            console.table(error);
                                            // If the request fails, the Promise will reject with an error.
                                        });
                                }
                            }
                
    connectBTN.onclick  = onClickConnect;
    unstakeBTN.onclick  = onClickUnstake;
    withdrawBTN.onclick = onClickWithdraw;
}

window.addEventListener('DOMContentLoaded', initialize())

