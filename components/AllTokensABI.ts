export const BurnableTokenABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorize",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedUsers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAuthorization",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burned",
    inputs: [
      {
        name: "burner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  { type: "error", name: "NotAuthorized", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const CappedTokenABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      { name: "cap_", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorize",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedUsers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cap",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAuthorization",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burned",
    inputs: [
      {
        name: "burner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20ExceededCap",
    inputs: [
      {
        name: "increasedSupply",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "cap", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidCap",
    inputs: [{ name: "cap", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "NotAuthorized", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const MintableTokenABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorize",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedUsers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAuthorization",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  { type: "error", name: "NotAuthorized", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const PausableTokenABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorize",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedUsers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAuthorization",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burned",
    inputs: [
      {
        name: "burner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "NotAuthorized", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const TimeLockTokenABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      { name: "cap_", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorize",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedUsers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cap",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "release",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAuthorization",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "timeLock",
    inputs: [
      { name: "beneficiary", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "timelock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract TokenTimelock",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IERC20" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burned",
    inputs: [
      {
        name: "burner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20ExceededCap",
    inputs: [
      {
        name: "increasedSupply",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "cap", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidCap",
    inputs: [{ name: "cap", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "NotAuthorized", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const mintableTokenBytecode = {
  object:
    "0x608060405234801561001057600080fd5b50604051610d72380380610d7283398101604081905261002f916101b2565b338282600361003e83826102a4565b50600461004b82826102a4565b5050506001600160a01b03811661007c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b610085816100a7565b5050336000908152600660205260409020805460ff1916600117905550610362565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261012057600080fd5b81516001600160401b03811115610139576101396100f9565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610167576101676100f9565b60405281815283820160200185101561017f57600080fd5b60005b8281101561019e57602081860181015183830182015201610182565b506000918101602001919091529392505050565b600080604083850312156101c557600080fd5b82516001600160401b038111156101db57600080fd5b6101e78582860161010f565b602085015190935090506001600160401b0381111561020557600080fd5b6102118582860161010f565b9150509250929050565b600181811c9082168061022f57607f821691505b60208210810361024f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561029f57806000526020600020601f840160051c8101602085101561027c5750805b601f840160051c820191505b8181101561029c5760008155600101610288565b50505b505050565b81516001600160401b038111156102bd576102bd6100f9565b6102d1816102cb845461021b565b84610255565b6020601f82116001811461030557600083156102ed5750848201515b600019600385901b1c1916600184901b17845561029c565b600084815260208120601f198516915b828110156103355787850151825560209485019460019092019101610315565b50848210156103535786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610a01806103716000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063b48028e311610066578063b48028e314610219578063b6a5d7de1461022c578063dd62ed3e1461023f578063f2fde38b1461027857600080fd5b8063715018a6146101db5780638da5cb5b146101e357806395d89b41146101fe578063a9059cbb1461020657600080fd5b806323b872dd116100d357806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806370a08231146101b257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd146101465780631828983a14610158575b600080fd5b61010d61028b565b60405161011a919061084a565b60405180910390f35b6101366101313660046108b4565b61031d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b6101366101663660046108de565b60066020526000908152604090205460ff1681565b610136610189366004610900565b610337565b6040516012815260200161011a565b6101b06101ab3660046108b4565b61035b565b005b61014a6101c03660046108de565b6001600160a01b031660009081526020819052604090205490565b6101b06103de565b6005546040516001600160a01b03909116815260200161011a565b61010d6103f2565b6101366102143660046108b4565b610401565b6101b06102273660046108de565b61040f565b6101b061023a3660046108de565b610438565b61014a61024d36600461093d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b06102863660046108de565b610464565b60606003805461029a90610970565b80601f01602080910402602001604051908101604052809291908181526020018280546102c690610970565b80156103135780601f106102e857610100808354040283529160200191610313565b820191906000526020600020905b8154815290600101906020018083116102f657829003601f168201915b5050505050905090565b60003361032b8185856104a7565b60019150505b92915050565b6000336103458582856104b9565b610350858585610537565b506001949350505050565b3360009081526006602052604090205460ff16156103c15761037d8282610596565b6040518181526001600160a01b0383169033907f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f09060200160405180910390a35050565b60405163ea8e4eb560e01b815260040160405180910390fd5b5050565b6103e66105cc565b6103f060006105f9565b565b60606004805461029a90610970565b60003361032b818585610537565b6104176105cc565b6001600160a01b03166000908152600660205260409020805460ff19169055565b6104406105cc565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b61046c6105cc565b6001600160a01b03811661049b57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6104a4816105f9565b50565b6104b4838383600161064b565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610531578181101561052257604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610492565b6105318484848403600061064b565b50505050565b6001600160a01b03831661056157604051634b637e8f60e11b815260006004820152602401610492565b6001600160a01b03821661058b5760405163ec442f0560e01b815260006004820152602401610492565b6104b4838383610720565b6001600160a01b0382166105c05760405163ec442f0560e01b815260006004820152602401610492565b6103da60008383610720565b6005546001600160a01b031633146103f05760405163118cdaa760e01b8152336004820152602401610492565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166106755760405163e602df0560e01b815260006004820152602401610492565b6001600160a01b03831661069f57604051634a1406b160e11b815260006004820152602401610492565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561053157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161071291815260200190565b60405180910390a350505050565b6001600160a01b03831661074b57806002600082825461074091906109aa565b909155506107bd9050565b6001600160a01b0383166000908152602081905260409020548181101561079e5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610492565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166107d9576002805482900390556107f8565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161083d91815260200190565b60405180910390a3505050565b602081526000825180602084015260005b81811015610878576020818601810151604086840101520161085b565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b03811681146108af57600080fd5b919050565b600080604083850312156108c757600080fd5b6108d083610898565b946020939093013593505050565b6000602082840312156108f057600080fd5b6108f982610898565b9392505050565b60008060006060848603121561091557600080fd5b61091e84610898565b925061092c60208501610898565b929592945050506040919091013590565b6000806040838503121561095057600080fd5b61095983610898565b915061096760208401610898565b90509250929050565b600181811c9082168061098457607f821691505b6020821081036109a457634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561033157634e487b7160e01b600052601160045260246000fdfea26469706673582212209c5d08ec141e121977d428d57590f3a39d624f4dadf33132548440c96993f15064736f6c634300081a0033",
  sourceMap:
    "363:1607:33:-:0;;;872:216;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;976:10;954:4;960:6;1962:5:21;:13;954:4:33;1962:5:21;:13;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:19;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;4202:51:36;4175:18;;1322:31:19;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;1063:10:33::2;1047:27;::::0;;;:15:::2;:27;::::0;;;;:34;;-1:-1:-1;;1047:34:33::2;1077:4;1047:34;::::0;;-1:-1:-1;363:1607:33;;2912:187:19;3004:6;;;-1:-1:-1;;;;;3020:17:19;;;-1:-1:-1;;;;;;3020:17:19;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:36:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:834;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:36;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:36;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:36;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:36;;;725:1;722;715:12;670:59;747:1;757:143;771:6;768:1;765:13;757:143;;;883:4;867:14;;;863:25;;857:32;834:14;;;830:25;;823:67;786:12;757:143;;;-1:-1:-1;948:1:36;920:19;;;941:4;916:30;909:41;;;;924:6;146:834;-1:-1:-1;;;146:834:36:o;985:557::-;1084:6;1092;1145:2;1133:9;1124:7;1120:23;1116:32;1113:52;;;1161:1;1158;1151:12;1113:52;1188:16;;-1:-1:-1;;;;;1216:30:36;;1213:50;;;1259:1;1256;1249:12;1213:50;1282:61;1335:7;1326:6;1315:9;1311:22;1282:61;:::i;:::-;1389:2;1374:18;;1368:25;1272:71;;-1:-1:-1;1368:25:36;-1:-1:-1;;;;;;1405:32:36;;1402:52;;;1450:1;1447;1440:12;1402:52;1473:63;1528:7;1517:8;1506:9;1502:24;1473:63;:::i;:::-;1463:73;;;985:557;;;;;:::o;1547:380::-;1626:1;1622:12;;;;1669;;;1690:61;;1744:4;1736:6;1732:17;1722:27;;1690:61;1797:2;1789:6;1786:14;1766:18;1763:38;1760:161;;1843:10;1838:3;1834:20;1831:1;1824:31;1878:4;1875:1;1868:15;1906:4;1903:1;1896:15;1760:161;;1547:380;;;:::o;2058:518::-;2160:2;2155:3;2152:11;2149:421;;;2196:5;2193:1;2186:16;2240:4;2237:1;2227:18;2310:2;2298:10;2294:19;2291:1;2287:27;2281:4;2277:38;2346:4;2334:10;2331:20;2328:47;;;-1:-1:-1;2369:4:36;2328:47;2424:2;2419:3;2415:12;2412:1;2408:20;2402:4;2398:31;2388:41;;2479:81;2497:2;2490:5;2487:13;2479:81;;;2556:1;2542:16;;2523:1;2512:13;2479:81;;;2483:3;;2149:421;2058:518;;;:::o;2752:1299::-;2872:10;;-1:-1:-1;;;;;2894:30:36;;2891:56;;;2927:18;;:::i;:::-;2956:97;3046:6;3006:38;3038:4;3032:11;3006:38;:::i;:::-;3000:4;2956:97;:::i;:::-;3102:4;3133:2;3122:14;;3150:1;3145:649;;;;3838:1;3855:6;3852:89;;;-1:-1:-1;3907:19:36;;;3901:26;3852:89;-1:-1:-1;;2709:1:36;2705:11;;;2701:24;2697:29;2687:40;2733:1;2729:11;;;2684:57;3954:81;;3115:930;;3145:649;2005:1;1998:14;;;2042:4;2029:18;;-1:-1:-1;;3181:20:36;;;3299:222;3313:7;3310:1;3307:14;3299:222;;;3395:19;;;3389:26;3374:42;;3502:4;3487:20;;;;3455:1;3443:14;;;;3329:12;3299:222;;;3303:3;3549:6;3540:7;3537:19;3534:201;;;3610:19;;;3604:26;-1:-1:-1;;3693:1:36;3689:14;;;3705:3;3685:24;3681:37;3677:42;3662:58;3647:74;;3534:201;-1:-1:-1;;;;3781:1:36;3765:14;;;3761:22;3748:36;;-1:-1:-1;2752:1299:36:o;4056:203::-;363:1607:33;;;;;;",
  linkReferences: {},
};

export const cappedTokenByteCode = {
  object:
    "0x60a060405234801561001057600080fd5b5060405161106c38038061106c83398101604081905261002f916101ea565b338383600361003e83826102e5565b50600461004b82826102e5565b50506005805460ff19169055506001600160a01b03811661008757604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610090816100d7565b50336000908152600660205260409020805460ff19166001179055806100cc5760405163392e1e2760e01b81526000600482015260240161007e565b608052506103a39050565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015857600080fd5b81516001600160401b0381111561017157610171610131565b604051601f8201601f19908116603f011681016001600160401b038111828210171561019f5761019f610131565b6040528181528382016020018510156101b757600080fd5b60005b828110156101d6576020818601810151838301820152016101ba565b506000918101602001919091529392505050565b6000806000606084860312156101ff57600080fd5b83516001600160401b0381111561021557600080fd5b61022186828701610147565b602086015190945090506001600160401b0381111561023f57600080fd5b61024b86828701610147565b925050604084015190509250925092565b600181811c9082168061027057607f821691505b60208210810361029057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102e057806000526020600020601f840160051c810160208510156102bd5750805b601f840160051c820191505b818110156102dd57600081556001016102c9565b50505b505050565b81516001600160401b038111156102fe576102fe610131565b6103128161030c845461025c565b84610296565b6020601f821160018114610346576000831561032e5750848201515b600019600385901b1c1916600184901b1784556102dd565b600084815260208120601f198516915b828110156103765787850151825560209485019460019092019101610356565b50848210156103945786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b608051610ca76103c5600039600081816101d6015261092d0152610ca76000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b85780639dc29fac1161007c5780639dc29fac1461028c578063a9059cbb1461029f578063b48028e3146102b2578063b6a5d7de146102c5578063dd62ed3e146102d8578063f2fde38b1461031157600080fd5b806370a0823114610222578063715018a61461024b5780638456cb59146102535780638da5cb5b1461025b57806395d89b411461028457600080fd5b8063313ce567116100ff578063313ce567146101c5578063355274ea146101d45780633f4ba83a146101fa57806340c10f19146102045780635c975abb1461021757600080fd5b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461017d5780631828983a1461018f57806323b872dd146101b2575b600080fd5b610144610324565b6040516101519190610af0565b60405180910390f35b61016d610168366004610b5a565b6103b6565b6040519015158152602001610151565b6002545b604051908152602001610151565b61016d61019d366004610b84565b60066020526000908152604090205460ff1681565b61016d6101c0366004610ba6565b6103d0565b60405160128152602001610151565b7f0000000000000000000000000000000000000000000000000000000000000000610181565b6102026103f4565b005b610202610212366004610b5a565b610406565b60055460ff1661016d565b610181610230366004610b84565b6001600160a01b031660009081526020819052604090205490565b610202610489565b61020261049b565b60055461010090046001600160a01b03166040516001600160a01b039091168152602001610151565b6101446104ab565b61020261029a366004610b5a565b6104ba565b61016d6102ad366004610b5a565b610515565b6102026102c0366004610b84565b610523565b6102026102d3366004610b84565b61054c565b6101816102e6366004610be3565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61020261031f366004610b84565b610578565b60606003805461033390610c16565b80601f016020809104026020016040519081016040528092919081815260200182805461035f90610c16565b80156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b5050505050905090565b6000336103c48185856105bb565b60019150505b92915050565b6000336103de8582856105cd565b6103e985858561064b565b506001949350505050565b6103fc6106aa565b6104046106dd565b565b3360009081526006602052604090205460ff161561046c57610428828261072f565b6040518181526001600160a01b0383169033907f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f09060200160405180910390a35050565b60405163ea8e4eb560e01b815260040160405180910390fd5b5050565b6104916106aa565b6104046000610765565b6104a36106aa565b6104046107bf565b60606004805461033390610c16565b3360009081526006602052604090205460ff161561046c576104dc82826107fc565b60405181815233907f696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df79060200160405180910390a25050565b6000336103c481858561064b565b61052b6106aa565b6001600160a01b03166000908152600660205260409020805460ff19169055565b6105546106aa565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6105806106aa565b6001600160a01b0381166105af57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6105b881610765565b50565b6105c88383836001610832565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610645578181101561063657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016105a6565b61064584848484036000610832565b50505050565b6001600160a01b03831661067557604051634b637e8f60e11b8152600060048201526024016105a6565b6001600160a01b03821661069f5760405163ec442f0560e01b8152600060048201526024016105a6565b6105c8838383610907565b6005546001600160a01b036101009091041633146104045760405163118cdaa760e01b81523360048201526024016105a6565b6106e561097f565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166107595760405163ec442f0560e01b8152600060048201526024016105a6565b61048560008383610907565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6107c76109a2565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586107123390565b6001600160a01b03821661082657604051634b637e8f60e11b8152600060048201526024016105a6565b61048582600083610907565b6001600160a01b03841661085c5760405163e602df0560e01b8152600060048201526024016105a6565b6001600160a01b03831661088657604051634a1406b160e11b8152600060048201526024016105a6565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561064557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108f991815260200190565b60405180910390a350505050565b61090f6109a2565b61091a8383836109c6565b6001600160a01b0383166105c8576002547f000000000000000000000000000000000000000000000000000000000000000090818111156109785760405163279e7e1560e21b815260048101829052602481018390526044016105a6565b5050505050565b60055460ff1661040457604051638dfc202b60e01b815260040160405180910390fd5b60055460ff16156104045760405163d93c066560e01b815260040160405180910390fd5b6001600160a01b0383166109f15780600260008282546109e69190610c50565b90915550610a639050565b6001600160a01b03831660009081526020819052604090205481811015610a445760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016105a6565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a7f57600280548290039055610a9e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ae391815260200190565b60405180910390a3505050565b602081526000825180602084015260005b81811015610b1e5760208186018101516040868401015201610b01565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b0381168114610b5557600080fd5b919050565b60008060408385031215610b6d57600080fd5b610b7683610b3e565b946020939093013593505050565b600060208284031215610b9657600080fd5b610b9f82610b3e565b9392505050565b600080600060608486031215610bbb57600080fd5b610bc484610b3e565b9250610bd260208501610b3e565b929592945050506040919091013590565b60008060408385031215610bf657600080fd5b610bff83610b3e565b9150610c0d60208401610b3e565b90509250929050565b600181811c90821680610c2a57607f821691505b602082108103610c4a57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103ca57634e487b7160e01b600052601160045260246000fdfea2646970667358221220c3678edbebbc4605b36a1a36957d719e9a95dcbf761d164af67b735f5524d2e564736f6c634300081a0033",
  sourceMap:
    "412:3348:32:-:0;;;1248:285;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1374:10;1352:4;1358:6;1962:5:21;:13;1352:4:32;1962:5:21;:13;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;-1:-1:-1;;1231:7:29;:15;;-1:-1:-1;;1231:15:29;;;-1:-1:-1;;;;;;1273:26:19;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;4263:51:36;4236:18;;1322:31:19;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;1412:10:32::2;1396:27;::::0;;;:15:::2;:27;::::0;;;;:34;;-1:-1:-1;;1396:34:32::2;1426:4;1396:34;::::0;;1445:9;1441:65:::2;;1477:18;::::0;-1:-1:-1;;;1477:18:32;;1493:1:::2;1477:18;::::0;::::2;4479:25:36::0;4452:18;;1477::32::2;4325:185:36::0;1441:65:32::2;1515:11;::::0;-1:-1:-1;412:3348:32;;-1:-1:-1;412:3348:32;2912:187:19;3004:6;;;-1:-1:-1;;;;;3020:17:19;;;3004:6;3020:17;;;-1:-1:-1;;;;;;3020:17:19;;;;;;3052:40;;3004:6;;;;;;;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:36:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:834;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:36;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:36;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:36;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:36;;;725:1;722;715:12;670:59;747:1;757:143;771:6;768:1;765:13;757:143;;;883:4;867:14;;;863:25;;857:32;834:14;;;830:25;;823:67;786:12;757:143;;;-1:-1:-1;948:1:36;920:19;;;941:4;916:30;909:41;;;;924:6;146:834;-1:-1:-1;;;146:834:36:o;985:618::-;1093:6;1101;1109;1162:2;1150:9;1141:7;1137:23;1133:32;1130:52;;;1178:1;1175;1168:12;1130:52;1205:16;;-1:-1:-1;;;;;1233:30:36;;1230:50;;;1276:1;1273;1266:12;1230:50;1299:61;1352:7;1343:6;1332:9;1328:22;1299:61;:::i;:::-;1406:2;1391:18;;1385:25;1289:71;;-1:-1:-1;1385:25:36;-1:-1:-1;;;;;;1422:32:36;;1419:52;;;1467:1;1464;1457:12;1419:52;1490:63;1545:7;1534:8;1523:9;1519:24;1490:63;:::i;:::-;1480:73;;;1593:2;1582:9;1578:18;1572:25;1562:35;;985:618;;;;;:::o;1608:380::-;1687:1;1683:12;;;;1730;;;1751:61;;1805:4;1797:6;1793:17;1783:27;;1751:61;1858:2;1850:6;1847:14;1827:18;1824:38;1821:161;;1904:10;1899:3;1895:20;1892:1;1885:31;1939:4;1936:1;1929:15;1967:4;1964:1;1957:15;1821:161;;1608:380;;;:::o;2119:518::-;2221:2;2216:3;2213:11;2210:421;;;2257:5;2254:1;2247:16;2301:4;2298:1;2288:18;2371:2;2359:10;2355:19;2352:1;2348:27;2342:4;2338:38;2407:4;2395:10;2392:20;2389:47;;;-1:-1:-1;2430:4:36;2389:47;2485:2;2480:3;2476:12;2473:1;2469:20;2463:4;2459:31;2449:41;;2540:81;2558:2;2551:5;2548:13;2540:81;;;2617:1;2603:16;;2584:1;2573:13;2540:81;;;2544:3;;2210:421;2119:518;;;:::o;2813:1299::-;2933:10;;-1:-1:-1;;;;;2955:30:36;;2952:56;;;2988:18;;:::i;:::-;3017:97;3107:6;3067:38;3099:4;3093:11;3067:38;:::i;:::-;3061:4;3017:97;:::i;:::-;3163:4;3194:2;3183:14;;3211:1;3206:649;;;;3899:1;3916:6;3913:89;;;-1:-1:-1;3968:19:36;;;3962:26;3913:89;-1:-1:-1;;2770:1:36;2766:11;;;2762:24;2758:29;2748:40;2794:1;2790:11;;;2745:57;4015:81;;3176:930;;3206:649;2066:1;2059:14;;;2103:4;2090:18;;-1:-1:-1;;3242:20:36;;;3360:222;3374:7;3371:1;3368:14;3360:222;;;3456:19;;;3450:26;3435:42;;3563:4;3548:20;;;;3516:1;3504:14;;;;3390:12;3360:222;;;3364:3;3610:6;3601:7;3598:19;3595:201;;;3671:19;;;3665:26;-1:-1:-1;;3754:1:36;3750:14;;;3766:3;3746:24;3742:37;3738:42;3723:58;3708:74;;3595:201;-1:-1:-1;;;;3842:1:36;3826:14;;;3822:22;3809:36;;-1:-1:-1;2813:1299:36:o;4325:185::-;412:3348:32;;;;;;;;;;;;;;;;;",
  linkReferences: {},
};

export const burnableTokenByteCode = {
  object:
    "0x608060405234801561001057600080fd5b50604051610e21380380610e2183398101604081905261002f916101b2565b338282600361003e83826102a4565b50600461004b82826102a4565b5050506001600160a01b03811661007c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b610085816100a7565b5050336000908152600660205260409020805460ff1916600117905550610362565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261012057600080fd5b81516001600160401b03811115610139576101396100f9565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610167576101676100f9565b60405281815283820160200185101561017f57600080fd5b60005b8281101561019e57602081860181015183830182015201610182565b506000918101602001919091529392505050565b600080604083850312156101c557600080fd5b82516001600160401b038111156101db57600080fd5b6101e78582860161010f565b602085015190935090506001600160401b0381111561020557600080fd5b6102118582860161010f565b9150509250929050565b600181811c9082168061022f57607f821691505b60208210810361024f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561029f57806000526020600020601f840160051c8101602085101561027c5750805b601f840160051c820191505b8181101561029c5760008155600101610288565b50505b505050565b81516001600160401b038111156102bd576102bd6100f9565b6102d1816102cb845461021b565b84610255565b6020601f82116001811461030557600083156102ed5750848201515b600019600385901b1c1916600184901b17845561029c565b600084815260208120601f198516915b828110156103355787850151825560209485019460019092019101610315565b50848210156103535786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610ab0806103716000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a9059cbb11610071578063a9059cbb14610224578063b48028e314610237578063b6a5d7de1461024a578063dd62ed3e1461025d578063f2fde38b1461029657600080fd5b8063715018a6146101e65780638da5cb5b146101ee57806395d89b41146102095780639dc29fac1461021157600080fd5b806323b872dd116100de57806323b872dd14610186578063313ce5671461019957806340c10f19146101a857806370a08231146101bd57600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd146101515780631828983a14610163575b600080fd5b6101186102a9565b60405161012591906108f9565b60405180910390f35b61014161013c366004610963565b61033b565b6040519015158152602001610125565b6002545b604051908152602001610125565b61014161017136600461098d565b60066020526000908152604090205460ff1681565b6101416101943660046109af565b610355565b60405160128152602001610125565b6101bb6101b6366004610963565b610379565b005b6101556101cb36600461098d565b6001600160a01b031660009081526020819052604090205490565b6101bb6103fc565b6005546040516001600160a01b039091168152602001610125565b610118610410565b6101bb61021f366004610963565b61041f565b610141610232366004610963565b61047a565b6101bb61024536600461098d565b610488565b6101bb61025836600461098d565b6104b1565b61015561026b3660046109ec565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101bb6102a436600461098d565b6104dd565b6060600380546102b890610a1f565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490610a1f565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b5050505050905090565b600033610349818585610520565b60019150505b92915050565b600033610363858285610532565b61036e8585856105b0565b506001949350505050565b3360009081526006602052604090205460ff16156103df5761039b828261060f565b6040518181526001600160a01b0383169033907f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f09060200160405180910390a35050565b60405163ea8e4eb560e01b815260040160405180910390fd5b5050565b610404610645565b61040e6000610672565b565b6060600480546102b890610a1f565b3360009081526006602052604090205460ff16156103df5761044182826106c4565b60405181815233907f696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df79060200160405180910390a25050565b6000336103498185856105b0565b610490610645565b6001600160a01b03166000908152600660205260409020805460ff19169055565b6104b9610645565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6104e5610645565b6001600160a01b03811661051457604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61051d81610672565b50565b61052d83838360016106fa565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105aa578181101561059b57604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161050b565b6105aa848484840360006106fa565b50505050565b6001600160a01b0383166105da57604051634b637e8f60e11b81526000600482015260240161050b565b6001600160a01b0382166106045760405163ec442f0560e01b81526000600482015260240161050b565b61052d8383836107cf565b6001600160a01b0382166106395760405163ec442f0560e01b81526000600482015260240161050b565b6103f8600083836107cf565b6005546001600160a01b0316331461040e5760405163118cdaa760e01b815233600482015260240161050b565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166106ee57604051634b637e8f60e11b81526000600482015260240161050b565b6103f8826000836107cf565b6001600160a01b0384166107245760405163e602df0560e01b81526000600482015260240161050b565b6001600160a01b03831661074e57604051634a1406b160e11b81526000600482015260240161050b565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105aa57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107c191815260200190565b60405180910390a350505050565b6001600160a01b0383166107fa5780600260008282546107ef9190610a59565b9091555061086c9050565b6001600160a01b0383166000908152602081905260409020548181101561084d5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161050b565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610888576002805482900390556108a7565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516108ec91815260200190565b60405180910390a3505050565b602081526000825180602084015260005b81811015610927576020818601810151604086840101520161090a565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461095e57600080fd5b919050565b6000806040838503121561097657600080fd5b61097f83610947565b946020939093013593505050565b60006020828403121561099f57600080fd5b6109a882610947565b9392505050565b6000806000606084860312156109c457600080fd5b6109cd84610947565b92506109db60208501610947565b929592945050506040919091013590565b600080604083850312156109ff57600080fd5b610a0883610947565b9150610a1660208401610947565b90509250929050565b600181811c90821680610a3357607f821691505b602082108103610a5357634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561034f57634e487b7160e01b600052601160045260246000fdfea2646970667358221220612b21d88437760f1ab33fadddb7015665ee3d3e6b3dfafdb6cbe749bc9fe81564736f6c634300081a0033",
  sourceMap:
    "363:2068:31:-:0;;;929:216;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1033:10;1011:4;1017:6;1962:5:21;:13;1011:4:31;1962:5:21;:13;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:19;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;4202:51:36;4175:18;;1322:31:19;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;1120:10:31::2;1104:27;::::0;;;:15:::2;:27;::::0;;;;:34;;-1:-1:-1;;1104:34:31::2;1134:4;1104:34;::::0;;-1:-1:-1;363:2068:31;;2912:187:19;3004:6;;;-1:-1:-1;;;;;3020:17:19;;;-1:-1:-1;;;;;;3020:17:19;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:36:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:834;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:36;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:36;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:36;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:36;;;725:1;722;715:12;670:59;747:1;757:143;771:6;768:1;765:13;757:143;;;883:4;867:14;;;863:25;;857:32;834:14;;;830:25;;823:67;786:12;757:143;;;-1:-1:-1;948:1:36;920:19;;;941:4;916:30;909:41;;;;924:6;146:834;-1:-1:-1;;;146:834:36:o;985:557::-;1084:6;1092;1145:2;1133:9;1124:7;1120:23;1116:32;1113:52;;;1161:1;1158;1151:12;1113:52;1188:16;;-1:-1:-1;;;;;1216:30:36;;1213:50;;;1259:1;1256;1249:12;1213:50;1282:61;1335:7;1326:6;1315:9;1311:22;1282:61;:::i;:::-;1389:2;1374:18;;1368:25;1272:71;;-1:-1:-1;1368:25:36;-1:-1:-1;;;;;;1405:32:36;;1402:52;;;1450:1;1447;1440:12;1402:52;1473:63;1528:7;1517:8;1506:9;1502:24;1473:63;:::i;:::-;1463:73;;;985:557;;;;;:::o;1547:380::-;1626:1;1622:12;;;;1669;;;1690:61;;1744:4;1736:6;1732:17;1722:27;;1690:61;1797:2;1789:6;1786:14;1766:18;1763:38;1760:161;;1843:10;1838:3;1834:20;1831:1;1824:31;1878:4;1875:1;1868:15;1906:4;1903:1;1896:15;1760:161;;1547:380;;;:::o;2058:518::-;2160:2;2155:3;2152:11;2149:421;;;2196:5;2193:1;2186:16;2240:4;2237:1;2227:18;2310:2;2298:10;2294:19;2291:1;2287:27;2281:4;2277:38;2346:4;2334:10;2331:20;2328:47;;;-1:-1:-1;2369:4:36;2328:47;2424:2;2419:3;2415:12;2412:1;2408:20;2402:4;2398:31;2388:41;;2479:81;2497:2;2490:5;2487:13;2479:81;;;2556:1;2542:16;;2523:1;2512:13;2479:81;;;2483:3;;2149:421;2058:518;;;:::o;2752:1299::-;2872:10;;-1:-1:-1;;;;;2894:30:36;;2891:56;;;2927:18;;:::i;:::-;2956:97;3046:6;3006:38;3038:4;3032:11;3006:38;:::i;:::-;3000:4;2956:97;:::i;:::-;3102:4;3133:2;3122:14;;3150:1;3145:649;;;;3838:1;3855:6;3852:89;;;-1:-1:-1;3907:19:36;;;3901:26;3852:89;-1:-1:-1;;2709:1:36;2705:11;;;2701:24;2697:29;2687:40;2733:1;2729:11;;;2684:57;3954:81;;3115:930;;3145:649;2005:1;1998:14;;;2042:4;2029:18;;-1:-1:-1;;3181:20:36;;;3299:222;3313:7;3310:1;3307:14;3299:222;;;3395:19;;;3389:26;3374:42;;3502:4;3487:20;;;;3455:1;3443:14;;;;3329:12;3299:222;;;3303:3;3549:6;3540:7;3537:19;3534:201;;;3610:19;;;3604:26;-1:-1:-1;;3693:1:36;3689:14;;;3705:3;3685:24;3681:37;3677:42;3662:58;3647:74;;3534:201;-1:-1:-1;;;;3781:1:36;3765:14;;;3761:22;3748:36;;-1:-1:-1;2752:1299:36:o;4056:203::-;363:2068:31;;;;;;",
  linkReferences: {},
};
export const pausableTokenByteCode = {
  object:
    "0x608060405234801561001057600080fd5b50604051610f94380380610f9483398101604081905261002f916101c4565b338282600361003e83826102b6565b50600461004b82826102b6565b50506005805460ff19169055506001600160a01b03811661008657604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61008f816100b1565b5050336000908152600660205260409020805460ff1916600117905550610374565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261013257600080fd5b81516001600160401b0381111561014b5761014b61010b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101795761017961010b565b60405281815283820160200185101561019157600080fd5b60005b828110156101b057602081860181015183830182015201610194565b506000918101602001919091529392505050565b600080604083850312156101d757600080fd5b82516001600160401b038111156101ed57600080fd5b6101f985828601610121565b602085015190935090506001600160401b0381111561021757600080fd5b61022385828601610121565b9150509250929050565b600181811c9082168061024157607f821691505b60208210810361026157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102b157806000526020600020601f840160051c8101602085101561028e5750805b601f840160051c820191505b818110156102ae576000815560010161029a565b50505b505050565b81516001600160401b038111156102cf576102cf61010b565b6102e3816102dd845461022d565b84610267565b6020601f82116001811461031757600083156102ff5750848201515b600019600385901b1c1916600184901b1784556102ae565b600084815260208120601f198516915b828110156103475787850151825560209485019460019092019101610327565b50848210156103655786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610c11806103836000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063a9059cbb11610071578063a9059cbb1461026e578063b48028e314610281578063b6a5d7de14610294578063dd62ed3e146102a7578063f2fde38b146102e057600080fd5b8063715018a61461021a5780638456cb59146102225780638da5cb5b1461022a57806395d89b41146102535780639dc29fac1461025b57600080fd5b8063313ce567116100f4578063313ce567146101ba5780633f4ba83a146101c957806340c10f19146101d35780635c975abb146101e657806370a08231146101f157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd146101725780631828983a1461018457806323b872dd146101a7575b600080fd5b6101396102f3565b6040516101469190610a5a565b60405180910390f35b61016261015d366004610ac4565b610385565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610aee565b60066020526000908152604090205460ff1681565b6101626101b5366004610b10565b61039f565b60405160128152602001610146565b6101d16103c3565b005b6101d16101e1366004610ac4565b6103d5565b60055460ff16610162565b6101766101ff366004610aee565b6001600160a01b031660009081526020819052604090205490565b6101d1610458565b6101d161046a565b60055461010090046001600160a01b03166040516001600160a01b039091168152602001610146565b61013961047a565b6101d1610269366004610ac4565b610489565b61016261027c366004610ac4565b6104e4565b6101d161028f366004610aee565b6104f2565b6101d16102a2366004610aee565b61051b565b6101766102b5366004610b4d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101d16102ee366004610aee565b610547565b60606003805461030290610b80565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610b80565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b5050505050905090565b60003361039381858561058a565b60019150505b92915050565b6000336103ad85828561059c565b6103b885858561061a565b506001949350505050565b6103cb610679565b6103d36106ac565b565b3360009081526006602052604090205460ff161561043b576103f782826106fe565b6040518181526001600160a01b0383169033907f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f09060200160405180910390a35050565b60405163ea8e4eb560e01b815260040160405180910390fd5b5050565b610460610679565b6103d36000610734565b610472610679565b6103d361078e565b60606004805461030290610b80565b3360009081526006602052604090205460ff161561043b576104ab82826107cb565b60405181815233907f696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df79060200160405180910390a25050565b60003361039381858561061a565b6104fa610679565b6001600160a01b03166000908152600660205260409020805460ff19169055565b610523610679565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b61054f610679565b6001600160a01b03811661057e57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61058781610734565b50565b6105978383836001610801565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610614578181101561060557604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610575565b61061484848484036000610801565b50505050565b6001600160a01b03831661064457604051634b637e8f60e11b815260006004820152602401610575565b6001600160a01b03821661066e5760405163ec442f0560e01b815260006004820152602401610575565b6105978383836108d6565b6005546001600160a01b036101009091041633146103d35760405163118cdaa760e01b8152336004820152602401610575565b6106b46108e9565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166107285760405163ec442f0560e01b815260006004820152602401610575565b610454600083836108d6565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61079661090c565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586106e13390565b6001600160a01b0382166107f557604051634b637e8f60e11b815260006004820152602401610575565b610454826000836108d6565b6001600160a01b03841661082b5760405163e602df0560e01b815260006004820152602401610575565b6001600160a01b03831661085557604051634a1406b160e11b815260006004820152602401610575565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561061457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108c891815260200190565b60405180910390a350505050565b6108de61090c565b610597838383610930565b60055460ff166103d357604051638dfc202b60e01b815260040160405180910390fd5b60055460ff16156103d35760405163d93c066560e01b815260040160405180910390fd5b6001600160a01b03831661095b5780600260008282546109509190610bba565b909155506109cd9050565b6001600160a01b038316600090815260208190526040902054818110156109ae5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610575565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166109e957600280548290039055610a08565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a4d91815260200190565b60405180910390a3505050565b602081526000825180602084015260005b81811015610a885760208186018101516040868401015201610a6b565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b0381168114610abf57600080fd5b919050565b60008060408385031215610ad757600080fd5b610ae083610aa8565b946020939093013593505050565b600060208284031215610b0057600080fd5b610b0982610aa8565b9392505050565b600080600060608486031215610b2557600080fd5b610b2e84610aa8565b9250610b3c60208501610aa8565b929592945050506040919091013590565b60008060408385031215610b6057600080fd5b610b6983610aa8565b9150610b7760208401610aa8565b90509250929050565b600181811c90821680610b9457607f821691505b602082108103610bb457634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561039957634e487b7160e01b600052601160045260246000fdfea2646970667358221220802640ac37a9b61110d2a7726d852828c7a04b71b5daf9ae7523c3e403d2733c64736f6c634300081a0033",
  sourceMap:
    "430:2611:34:-:0;;;1006:216;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1110:10;1088:4;1094:6;1962:5:21;:13;1088:4:34;1962:5:21;:13;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;-1:-1:-1;;1231:7:29;:15;;-1:-1:-1;;1231:15:29;;;-1:-1:-1;;;;;;1273:26:19;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;4202:51:36;4175:18;;1322:31:19;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;1197:10:34::2;1181:27;::::0;;;:15:::2;:27;::::0;;;;:34;;-1:-1:-1;;1181:34:34::2;1211:4;1181:34;::::0;;-1:-1:-1;430:2611:34;;2912:187:19;3004:6;;;-1:-1:-1;;;;;3020:17:19;;;3004:6;3020:17;;;-1:-1:-1;;;;;;3020:17:19;;;;;;3052:40;;3004:6;;;;;;;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:36:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:834;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:36;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:36;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:36;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:36;;;725:1;722;715:12;670:59;747:1;757:143;771:6;768:1;765:13;757:143;;;883:4;867:14;;;863:25;;857:32;834:14;;;830:25;;823:67;786:12;757:143;;;-1:-1:-1;948:1:36;920:19;;;941:4;916:30;909:41;;;;924:6;146:834;-1:-1:-1;;;146:834:36:o;985:557::-;1084:6;1092;1145:2;1133:9;1124:7;1120:23;1116:32;1113:52;;;1161:1;1158;1151:12;1113:52;1188:16;;-1:-1:-1;;;;;1216:30:36;;1213:50;;;1259:1;1256;1249:12;1213:50;1282:61;1335:7;1326:6;1315:9;1311:22;1282:61;:::i;:::-;1389:2;1374:18;;1368:25;1272:71;;-1:-1:-1;1368:25:36;-1:-1:-1;;;;;;1405:32:36;;1402:52;;;1450:1;1447;1440:12;1402:52;1473:63;1528:7;1517:8;1506:9;1502:24;1473:63;:::i;:::-;1463:73;;;985:557;;;;;:::o;1547:380::-;1626:1;1622:12;;;;1669;;;1690:61;;1744:4;1736:6;1732:17;1722:27;;1690:61;1797:2;1789:6;1786:14;1766:18;1763:38;1760:161;;1843:10;1838:3;1834:20;1831:1;1824:31;1878:4;1875:1;1868:15;1906:4;1903:1;1896:15;1760:161;;1547:380;;;:::o;2058:518::-;2160:2;2155:3;2152:11;2149:421;;;2196:5;2193:1;2186:16;2240:4;2237:1;2227:18;2310:2;2298:10;2294:19;2291:1;2287:27;2281:4;2277:38;2346:4;2334:10;2331:20;2328:47;;;-1:-1:-1;2369:4:36;2328:47;2424:2;2419:3;2415:12;2412:1;2408:20;2402:4;2398:31;2388:41;;2479:81;2497:2;2490:5;2487:13;2479:81;;;2556:1;2542:16;;2523:1;2512:13;2479:81;;;2483:3;;2149:421;2058:518;;;:::o;2752:1299::-;2872:10;;-1:-1:-1;;;;;2894:30:36;;2891:56;;;2927:18;;:::i;:::-;2956:97;3046:6;3006:38;3038:4;3032:11;3006:38;:::i;:::-;3000:4;2956:97;:::i;:::-;3102:4;3133:2;3122:14;;3150:1;3145:649;;;;3838:1;3855:6;3852:89;;;-1:-1:-1;3907:19:36;;;3901:26;3852:89;-1:-1:-1;;2709:1:36;2705:11;;;2701:24;2697:29;2687:40;2733:1;2729:11;;;2684:57;3954:81;;3115:930;;3145:649;2005:1;1998:14;;;2042:4;2029:18;;-1:-1:-1;;3181:20:36;;;3299:222;3313:7;3310:1;3307:14;3299:222;;;3395:19;;;3389:26;3374:42;;3502:4;3487:20;;;;3455:1;3443:14;;;;3329:12;3299:222;;;3303:3;3549:6;3540:7;3537:19;3534:201;;;3610:19;;;3604:26;-1:-1:-1;;3693:1:36;3689:14;;;3705:3;3685:24;3681:37;3677:42;3662:58;3647:74;;3534:201;-1:-1:-1;;;;3781:1:36;3765:14;;;3761:22;3748:36;;-1:-1:-1;2752:1299:36:o;4056:203::-;430:2611:34;;;;;;",
  linkReferences: {},
};

export const timeLockTokenByteCode = {
  object:
    "0x60a060405234801561001057600080fd5b506040516118f93803806118f983398101604081905261002f916101ea565b338383600361003e83826102e5565b50600461004b82826102e5565b50506005805460ff19169055506001600160a01b03811661008757604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610090816100d7565b50336000908152600860205260409020805460ff19166001179055806100cc5760405163392e1e2760e01b81526000600482015260240161007e565b608052506103a39050565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015857600080fd5b81516001600160401b0381111561017157610171610131565b604051601f8201601f19908116603f011681016001600160401b038111828210171561019f5761019f610131565b6040528181528382016020018510156101b757600080fd5b60005b828110156101d6576020818601810151838301820152016101ba565b506000918101602001919091529392505050565b6000806000606084860312156101ff57600080fd5b83516001600160401b0381111561021557600080fd5b61022186828701610147565b602086015190945090506001600160401b0381111561023f57600080fd5b61024b86828701610147565b925050604084015190509250925092565b600181811c9082168061027057607f821691505b60208210810361029057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102e057806000526020600020601f840160051c810160208510156102bd5750805b601f840160051c820191505b818110156102dd57600081556001016102c9565b50505b505050565b81516001600160401b038111156102fe576102fe610131565b6103128161030c845461025c565b84610296565b6020601f821160018114610346576000831561032e5750848201515b600019600385901b1c1916600184901b1784556102dd565b600084815260208120601f198516915b828110156103765787850151825560209485019460019092019101610356565b50848210156103945786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6080516115346103c5600039600081816102120152610b0201526115346000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638456cb59116100de578063b48028e311610097578063d91dc95211610071578063d91dc95214610330578063dd62ed3e14610343578063f2fde38b1461037c578063fc0c546a1461038f57600080fd5b8063b48028e3146102f7578063b6a5d7de1461030a578063d33219b41461031d57600080fd5b80638456cb591461028f57806386d1a69f146102975780638da5cb5b1461029f57806395d89b41146102c95780639dc29fac146102d1578063a9059cbb146102e457600080fd5b8063355274ea11610130578063355274ea146102105780633f4ba83a1461023657806340c10f19146102405780635c975abb1461025357806370a082311461025e578063715018a61461028757600080fd5b806306fdde0314610178578063095ea7b31461019657806318160ddd146101b95780631828983a146101cb57806323b872dd146101ee578063313ce56714610201575b600080fd5b6101806103a2565b60405161018d9190610cd2565b60405180910390f35b6101a96101a4366004610d3c565b610434565b604051901515815260200161018d565b6002545b60405190815260200161018d565b6101a96101d9366004610d66565b60086020526000908152604090205460ff1681565b6101a96101fc366004610d88565b61044e565b6040516012815260200161018d565b7f00000000000000000000000000000000000000000000000000000000000000006101bd565b61023e610472565b005b61023e61024e366004610d3c565b610484565b60055460ff166101a9565b6101bd61026c366004610d66565b6001600160a01b031660009081526020819052604090205490565b61023e610507565b61023e610519565b61023e610529565b60055461010090046001600160a01b03165b6040516001600160a01b03909116815260200161018d565b61018061059b565b61023e6102df366004610d3c565b6105aa565b6101a96102f2366004610d3c565b610605565b61023e610305366004610d66565b610613565b61023e610318366004610d66565b61063c565b6007546102b1906001600160a01b031681565b61023e61033e366004610d3c565b610668565b6101bd610351366004610dc5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61023e61038a366004610d66565b61075d565b6006546102b1906001600160a01b031681565b6060600380546103b190610df8565b80601f01602080910402602001604051908101604052809291908181526020018280546103dd90610df8565b801561042a5780601f106103ff5761010080835404028352916020019161042a565b820191906000526020600020905b81548152906001019060200180831161040d57829003601f168201915b5050505050905090565b60003361044281858561079b565b60019150505b92915050565b60003361045c8582856107a8565b610467858585610820565b506001949350505050565b61047a61087f565b6104826108b2565b565b3360009081526008602052604090205460ff16156104ea576104a68282610904565b6040518181526001600160a01b0383169033907f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f09060200160405180910390a35050565b60405163ea8e4eb560e01b815260040160405180910390fd5b5050565b61050f61087f565b610482600061093a565b61052161087f565b610482610994565b61053161087f565b600760009054906101000a90046001600160a01b03166001600160a01b03166386d1a69f6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561058157600080fd5b505af1158015610595573d6000803e3d6000fd5b50505050565b6060600480546103b190610df8565b3360009081526008602052604090205460ff16156104ea576105cc82826109d1565b60405181815233907f696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df79060200160405180910390a25050565b600033610442818585610820565b61061b61087f565b6001600160a01b03166000908152600860205260409020805460ff19169055565b61064461087f565b6001600160a01b03166000908152600860205260409020805460ff19166001179055565b61067061087f565b306000908152602081905260409020548111156106d45760405162461bcd60e51b815260206004820181905260248201527f496e73756666696369656e742062616c616e636520696e20636f6e747261637460448201526064015b60405180910390fd5b60006106e1426046610e32565b90503083826040516106f290610cc5565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f08015801561072c573d6000803e3d6000fd5b50600780546001600160a01b0319166001600160a01b0392909216918217905561075890309084610820565b505050565b61076561087f565b6001600160a01b03811661078f57604051631e4fbdf760e01b8152600060048201526024016106cb565b6107988161093a565b50565b6107588383836001610a07565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610595578181101561081157604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016106cb565b61059584848484036000610a07565b6001600160a01b03831661084a57604051634b637e8f60e11b8152600060048201526024016106cb565b6001600160a01b0382166108745760405163ec442f0560e01b8152600060048201526024016106cb565b610758838383610adc565b6005546001600160a01b036101009091041633146104825760405163118cdaa760e01b81523360048201526024016106cb565b6108ba610b54565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03821661092e5760405163ec442f0560e01b8152600060048201526024016106cb565b61050360008383610adc565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61099c610b77565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586108e73390565b6001600160a01b0382166109fb57604051634b637e8f60e11b8152600060048201526024016106cb565b61050382600083610adc565b6001600160a01b038416610a315760405163e602df0560e01b8152600060048201526024016106cb565b6001600160a01b038316610a5b57604051634a1406b160e11b8152600060048201526024016106cb565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561059557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610ace91815260200190565b60405180910390a350505050565b610ae4610b77565b610aef838383610b9b565b6001600160a01b038316610758576002547f00000000000000000000000000000000000000000000000000000000000000009081811115610b4d5760405163279e7e1560e21b815260048101829052602481018390526044016106cb565b5050505050565b60055460ff1661048257604051638dfc202b60e01b815260040160405180910390fd5b60055460ff16156104825760405163d93c066560e01b815260040160405180910390fd5b6001600160a01b038316610bc6578060026000828254610bbb9190610e32565b90915550610c389050565b6001600160a01b03831660009081526020819052604090205481811015610c195760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016106cb565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610c5457600280548290039055610c73565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610cb891815260200190565b60405180910390a3505050565b6106ab80610e5483390190565b602081526000825180602084015260005b81811015610d005760208186018101516040868401015201610ce3565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b0381168114610d3757600080fd5b919050565b60008060408385031215610d4f57600080fd5b610d5883610d20565b946020939093013593505050565b600060208284031215610d7857600080fd5b610d8182610d20565b9392505050565b600080600060608486031215610d9d57600080fd5b610da684610d20565b9250610db460208501610d20565b929592945050506040919091013590565b60008060408385031215610dd857600080fd5b610de183610d20565b9150610def60208401610d20565b90509250929050565b600181811c90821680610e0c57607f821691505b602082108103610e2c57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561044857634e487b7160e01b600052601160045260246000fdfe60e060405234801561001057600080fd5b506040516106ab3803806106ab83398101604081905261002f916100d0565b42811161009d5760405162461bcd60e51b815260206004820152603260248201527f546f6b656e54696d656c6f636b3a2072656c656173652074696d65206973206260448201527165666f72652063757272656e742074696d6560701b606482015260840160405180910390fd5b6001600160a01b03928316608052911660a05260c052610113565b6001600160a01b03811681146100cd57600080fd5b50565b6000806000606084860312156100e557600080fd5b83516100f0816100b8565b6020850151909350610101816100b8565b80925050604084015190509250925092565b60805160a05160c05161055161015a60003960008181609f015260f00152600081816053015261029801526000818160ca01528181610182015261027601526105516000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806338af3eed1461005157806386d1a69f14610090578063b91d40011461009a578063fc0c546a146100c8575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b6100986100ee565b005b6040517f00000000000000000000000000000000000000000000000000000000000000008152602001610087565b7f0000000000000000000000000000000000000000000000000000000000000000610073565b7f000000000000000000000000000000000000000000000000000000000000000042101561017e5760405162461bcd60e51b815260206004820152603260248201527f546f6b656e54696d656c6f636b3a2063757272656e742074696d65206973206260448201527165666f72652072656c656173652074696d6560701b60648201526084015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa1580156101e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020b91906104b1565b9050600081116102695760405162461bcd60e51b815260206004820152602360248201527f546f6b656e54696d656c6f636b3a206e6f20746f6b656e7320746f2072656c6560448201526261736560e81b6064820152608401610175565b6102bd6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000836102c0565b50565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610312908490610317565b505050565b600061032c6001600160a01b0384168361037a565b9050805160001415801561035157508080602001905181019061034f91906104ca565b155b1561031257604051635274afe760e01b81526001600160a01b0384166004820152602401610175565b60606103888383600061038f565b9392505050565b6060814710156103b45760405163cd78605960e01b8152306004820152602401610175565b600080856001600160a01b031684866040516103d091906104ec565b60006040518083038185875af1925050503d806000811461040d576040519150601f19603f3d011682016040523d82523d6000602084013e610412565b606091505b509150915061042286838361042c565b9695505050505050565b6060826104415761043c82610488565b610388565b815115801561045857506001600160a01b0384163b155b1561048157604051639996b31560e01b81526001600160a01b0385166004820152602401610175565b5080610388565b8051156104985780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156104c357600080fd5b5051919050565b6000602082840312156104dc57600080fd5b8151801515811461038857600080fd5b6000825160005b8181101561050d57602081860181015185830152016104f3565b50600092019182525091905056fea26469706673582212202ef1865f794c22349ddb97cb5967d7f0646c37eea746c0e3ac53bc4d011a333c64736f6c634300081a0033a2646970667358221220df0b1f812c76f8989642b406203eaed4c3f9b4927af710f69fde60dbd7fc500564736f6c634300081a0033",
  sourceMap:
    "669:4242:35:-:0;;;1568:285;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1694:10;1672:4;1678:6;1962:5:21;:13;1672:4:35;1962:5:21;:13;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;-1:-1:-1;;1231:7:29;:15;;-1:-1:-1;;1231:15:29;;;-1:-1:-1;;;;;;1273:26:19;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;4263:51:36;4236:18;;1322:31:19;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;1732:10:35::2;1716:27;::::0;;;:15:::2;:27;::::0;;;;:34;;-1:-1:-1;;1716:34:35::2;1746:4;1716:34;::::0;;1765:9;1761:65:::2;;1797:18;::::0;-1:-1:-1;;;1797:18:35;;1813:1:::2;1797:18;::::0;::::2;4479:25:36::0;4452:18;;1797::35::2;4325:185:36::0;1761:65:35::2;1835:11;::::0;-1:-1:-1;669:4242:35;;-1:-1:-1;669:4242:35;2912:187:19;3004:6;;;-1:-1:-1;;;;;3020:17:19;;;3004:6;3020:17;;;-1:-1:-1;;;;;;3020:17:19;;;;;;3052:40;;3004:6;;;;;;;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:36:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:834;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:36;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:36;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:36;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:36;;;725:1;722;715:12;670:59;747:1;757:143;771:6;768:1;765:13;757:143;;;883:4;867:14;;;863:25;;857:32;834:14;;;830:25;;823:67;786:12;757:143;;;-1:-1:-1;948:1:36;920:19;;;941:4;916:30;909:41;;;;924:6;146:834;-1:-1:-1;;;146:834:36:o;985:618::-;1093:6;1101;1109;1162:2;1150:9;1141:7;1137:23;1133:32;1130:52;;;1178:1;1175;1168:12;1130:52;1205:16;;-1:-1:-1;;;;;1233:30:36;;1230:50;;;1276:1;1273;1266:12;1230:50;1299:61;1352:7;1343:6;1332:9;1328:22;1299:61;:::i;:::-;1406:2;1391:18;;1385:25;1289:71;;-1:-1:-1;1385:25:36;-1:-1:-1;;;;;;1422:32:36;;1419:52;;;1467:1;1464;1457:12;1419:52;1490:63;1545:7;1534:8;1523:9;1519:24;1490:63;:::i;:::-;1480:73;;;1593:2;1582:9;1578:18;1572:25;1562:35;;985:618;;;;;:::o;1608:380::-;1687:1;1683:12;;;;1730;;;1751:61;;1805:4;1797:6;1793:17;1783:27;;1751:61;1858:2;1850:6;1847:14;1827:18;1824:38;1821:161;;1904:10;1899:3;1895:20;1892:1;1885:31;1939:4;1936:1;1929:15;1967:4;1964:1;1957:15;1821:161;;1608:380;;;:::o;2119:518::-;2221:2;2216:3;2213:11;2210:421;;;2257:5;2254:1;2247:16;2301:4;2298:1;2288:18;2371:2;2359:10;2355:19;2352:1;2348:27;2342:4;2338:38;2407:4;2395:10;2392:20;2389:47;;;-1:-1:-1;2430:4:36;2389:47;2485:2;2480:3;2476:12;2473:1;2469:20;2463:4;2459:31;2449:41;;2540:81;2558:2;2551:5;2548:13;2540:81;;;2617:1;2603:16;;2584:1;2573:13;2540:81;;;2544:3;;2210:421;2119:518;;;:::o;2813:1299::-;2933:10;;-1:-1:-1;;;;;2955:30:36;;2952:56;;;2988:18;;:::i;:::-;3017:97;3107:6;3067:38;3099:4;3093:11;3067:38;:::i;:::-;3061:4;3017:97;:::i;:::-;3163:4;3194:2;3183:14;;3211:1;3206:649;;;;3899:1;3916:6;3913:89;;;-1:-1:-1;3968:19:36;;;3962:26;3913:89;-1:-1:-1;;2770:1:36;2766:11;;;2762:24;2758:29;2748:40;2794:1;2790:11;;;2745:57;4015:81;;3176:930;;3206:649;2066:1;2059:14;;;2103:4;2090:18;;-1:-1:-1;;3242:20:36;;;3360:222;3374:7;3371:1;3368:14;3360:222;;;3456:19;;;3450:26;3435:42;;3563:4;3548:20;;;;3516:1;3504:14;;;;3390:12;3360:222;;;3364:3;3610:6;3601:7;3598:19;3595:201;;;3671:19;;;3665:26;-1:-1:-1;;3754:1:36;3750:14;;;3766:3;3746:24;3742:37;3738:42;3723:58;3708:74;;3595:201;-1:-1:-1;;;;3842:1:36;3826:14;;;3822:22;3809:36;;-1:-1:-1;2813:1299:36:o;4325:185::-;669:4242:35;;;;;;;;;;;;;;;;;",
  linkReferences: {},
};
