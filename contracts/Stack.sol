//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Stack {
    address public owner;
    address[] public users;
    uint256 public q_id;
    uint256 public a_id;
    uint256 public article_id;
    struct QuestionInfo {
        uint256 q_id;
        address user;
        string q_cid;
        uint256 q_upvote;
        uint256 q_downvote;
        uint256[] ans_id;
    }
    mapping(uint256 => QuestionInfo) public idToQuestion;
    mapping(address => uint256[]) public userToQuestions;
    struct AnswerInfo {
        uint256 a_id;
        address user;
        string a_cid;
        uint256 a_upvote;
        uint256 a_downvote;
        bool isApproved;
    }
    mapping(uint256 => AnswerInfo) public idToAnswer;
    mapping(address => uint256[]) public userToAnswers;
    struct ArticleInfo {
        uint256 article_id;
        address user;
        string article_cid;
        uint256 noOfLikes;
        uint256 tip;
    }
    mapping(uint256 => ArticleInfo) public idToArticle;
    mapping(address => uint256[]) public userToArticle;
    struct UserInfo {
        address user;
        string userImageCID;
        string name;
        string email;
        string designation;
        uint256 noOfQuestions;
        uint256 noOfAnswers;
        uint256 totalScore;
        uint256 reputationScore;
        uint256 totalReward;
        uint256 totalRedeem;
        uint256 totalTip;
        string[] taglist;
        mapping(string => bool) isTagAdded;
    }
    mapping(address => UserInfo) public addressToUser;
    mapping(address => mapping(string => uint256)) public addressToTagToScore;

    uint256 withdrawEligibleAmount = 100;
    uint256 public tokensSold = 0;

    constructor() {
        owner = msg.sender;
    }

    //Questions---------------------------------------------------------------------
    function addQuestion(string memory q_cid, string[] memory tag_name) public {
        q_id += 1;
        idToQuestion[q_id] = QuestionInfo(
            q_id,
            msg.sender,
            q_cid,
            0,
            0,
            new uint256[](0)
        );
        userToQuestions[msg.sender].push(q_id);
        addressToUser[msg.sender].noOfQuestions += 1;
        addressToUser[msg.sender].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
        for (uint256 i = 0; i < tag_name.length; i++) {
            addressToTagToScore[msg.sender][tag_name[i]] += 5;
            if (addressToUser[msg.sender].isTagAdded[tag_name[i]] == false) {
                addressToUser[msg.sender].taglist.push(tag_name[i]);
                addressToUser[msg.sender].isTagAdded[tag_name[i]] == true;
            }
        }
    }

    function getQuestion(uint256 qid)
        public
        view
        returns (QuestionInfo memory)
    {
        return idToQuestion[qid];
    }

    function q_upVote(uint256 qid) public {
        idToQuestion[qid].q_upvote += 1;
        address user = idToQuestion[qid].user;
        addressToUser[user].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
    }

    function q_downvote(uint256 qid) public {
        idToQuestion[qid].q_downvote += 1;
        address user = idToQuestion[qid].user;
        addressToUser[user].totalScore -= 5;
        addressToUser[msg.sender].reputationScore -=5;
    }

    //Answers---------------------------------------------------------------------
    function addAnswer(uint256 qid, string memory a_cid) public {
        a_id += 1;
        idToAnswer[a_id] = AnswerInfo(a_id, msg.sender, a_cid, 0, 0, false);
        userToAnswers[msg.sender].push(a_id);
        idToQuestion[qid].ans_id.push(a_id);
        addressToUser[msg.sender].noOfAnswers += 1;
        addressToUser[msg.sender].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
    }

    function getAnswer(uint256 aid) public view returns (AnswerInfo memory) {
        return idToAnswer[aid];
    }

    function a_upVote(uint256 aid) public {
        idToAnswer[aid].a_upvote += 1;
        address user = idToAnswer[aid].user;
        addressToUser[user].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
    }

    function a_downvote(uint256 aid) public {
        idToAnswer[aid].a_downvote += 1;
        address user = idToAnswer[aid].user;
        addressToUser[user].totalScore -= 5;
        addressToUser[msg.sender].reputationScore -=5;
    }

    //Articles---------------------------------------------------------------------
    function addArticle(string memory article_cid) public {
        article_id += 1;
        idToArticle[article_id] = ArticleInfo(
            article_id,
            msg.sender,
            article_cid,
            0,
            0
        );
        userToArticle[msg.sender].push(article_id);
        addressToUser[msg.sender].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
    }

    function getArticle(uint256 articleid)
        public
        view
        returns (ArticleInfo memory)
    {
        return idToArticle[articleid];
    }

    function addLike(uint256 articleid) public {
        idToArticle[articleid].noOfLikes += 1;
    }

    function createProfile(
        string memory name,
        string memory userImageCID,
        string memory email,
        string memory designation,
        string[] memory listOfTags
    ) public {
        users.push(msg.sender);
        UserInfo storage user = addressToUser[msg.sender];
        user.user = msg.sender;
        user.name = name;
        user.userImageCID = userImageCID;
        user.email = email;
        user.designation = designation;
        user.noOfQuestions = 0;
        user.noOfAnswers = 0;
        user.totalScore = 0;
        user.reputationScore = 0;
        user.totalReward = 0;
        user.totalRedeem = 0;
        user.totalTip = 0;
        user.taglist = listOfTags;
        // user = UserInfo(msg.sender,name,email,designation,0,0,0,0,0,0,listOfTags);
    }

    function approve(uint256 aid) public {
        address user = idToAnswer[aid].user;
        idToAnswer[aid].isApproved = true;
        addressToUser[user].totalScore += 5;
        addressToUser[msg.sender].reputationScore +=5;
    }

    function getAllUserQuestionsId() public view returns (uint256[] memory) {
        return userToQuestions[msg.sender];
    }

    function getAllUserAnswersId() public view returns (uint256[] memory) {
        return userToAnswers[msg.sender];
    }

    function getAllUserArticlesId() public view returns (uint256[] memory) {
        return userToArticle[msg.sender];
    }

    function getUserTage() public view returns (string[] memory) {
        return addressToUser[msg.sender].taglist;
    }

    function getTokensSold() public view returns (uint256) {
        return tokensSold;
    }

    function setTokenSold(uint256 tokei) public {
        tokensSold = tokei;
    }

    function getUserFromArticleId(uint256 articleid)
        public
        view
        returns (address)
    {
        return idToArticle[articleid].user;
    }

    function getTipFromArticleId(uint256 articleid)
        public
        view
        returns (uint256)
    {
        return idToArticle[articleid].tip;
    }

    function setTipFromArticleId(uint256 articleid, uint256 tip) public {
        idToArticle[articleid].tip = tip;
    }

    function getUserTotalTip(address user) public view returns (uint256) {
        return addressToUser[user].totalTip;
    }

    function setUserTotalTip(address user, uint256 totaltip) public {
        addressToUser[user].totalTip = totaltip;
    }


    function getTotalScore(address user) public view returns(uint){
        return addressToUser[user].totalScore;
    }

    function getTotalRedeem(address user) public view returns(uint){
        return addressToUser[user].totalRedeem;
    }

    function setTotalScore(address user, uint score) public{
        addressToUser[user].totalScore=score;
    }

    function setTotalRedeem(address user, uint redeem) public{
        addressToUser[user].totalRedeem += redeem;
    }
}

