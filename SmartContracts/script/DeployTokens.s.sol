// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {MintableToken} from "../src/MintableToken.sol";
import {BurnableToken} from "../src/BurnableToken.sol";
import {PausableToken} from "../src/PausableToken.sol";
import {CappedToken} from "../src/CappedToken.sol";
import {TimeLockToken} from "../src/TimeLockToken.sol";

contract DeployTokens is Script {
    function run()
        external
        returns (
            MintableToken,
            BurnableToken,
            PausableToken,
            CappedToken,
            TimeLockToken
        )
    // MintableToken
    {
        uint256 cappedAmount = 10000 * (10 ** 18);

        address owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;

        vm.startBroadcast(owner);
        MintableToken mintableToken = new MintableToken("Bunny", "BUN");
        BurnableToken burnableToken = new BurnableToken("Rabbit", "RB");
        PausableToken pausableToken = new PausableToken("Pigg", "PG");
        CappedToken cappedToken = new CappedToken("Deer", "Dr", cappedAmount);
        TimeLockToken timeLockToken = new TimeLockToken(
            "rhino",
            "rhn",
            cappedAmount
        );

        vm.stopBroadcast();

        return (
            mintableToken,
            burnableToken,
            pausableToken,
            cappedToken,
            timeLockToken
        );
    }
}
