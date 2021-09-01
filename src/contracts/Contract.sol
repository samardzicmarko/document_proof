pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

contract Contest {
    Form[] public forms;

    function createContest(string memory _name, uint256 _points) public {
        Form newForm = new Form(payable(msg.sender), _name, _points);
        forms.push(newForm);
    }

    function returnAllBids() public view returns (Form[] memory) {
        return forms;
    }
}

contract Form {
    using SafeMath for uint256;

    address payable private owner;
    string name;
    uint256 points;

    enum State {
        INITIALIZED,
        PENDING,
        FINALIZED
    }

    State public formState;

    uint256 public maxPoints;
    address payable public bestCandidate;

    mapping(address => uint256) public bids;

    constructor(
        address payable _owner,
        string memory _name,
        uint256 _points
    ) {
        owner = _owner;
        name = _name;
        points = _points;
        formState = State.PENDING;
    }

    modifier isOwner() {
        require(msg.sender != owner);
        _;
    }

    function placeBid() public payable isOwner returns (bool) {
        require(formState == State.PENDING);
        require(msg.value > 0);

        uint256 currentBid = bids[msg.sender].add(msg.value);

        require(currentBid > maxPoints);

        bids[msg.sender] = currentBid;

        maxPoints = currentBid;
        bestCandidate = payable(msg.sender);

        return true;
    }

    function finalizeAuction() public {
        //owner and bidders can finalize auction
        require(msg.sender == owner || bids[msg.sender] > 0);

        address payable recipiant;
        uint256 value;

        if (msg.sender == owner) {
            recipiant == owner;
            value = maxPoints;
        }
        // dont return money to bestCandidate
        else if (msg.sender == bestCandidate) {
            recipiant = bestCandidate;
            value = 0;
        } else {
            recipiant = payable(msg.sender);
            value = bids[payable(msg.sender)];
        }

        bids[msg.sender] = 0;
        payable(recipiant).transfer(value);
        formState = State.FINALIZED;
    }

    function returnContents()
        public
        view
        returns (
            string memory,
            uint256,
            State
        )
    {
        return (name, points, formState);
    }
}
