const rootPath = 'https://cnodejs.org/api/v1';
const apiObject = {
  getTopics: rootPath + '/topics',  // 获取话题列表
  getTopicInfo: rootPath + '/topic', // 获取话题详情
  checkUserToken: rootPath + '/accesstoken', // 验证用户token
  getUserInfo: rootPath + '/user/', // 获取用户信息
  createTopic: rootPath + '/topics', // 新建话题
  replyTopic: rootPath + '/topics/', // 回复话题消息
  upReply: rootPath + '/reply/'  // 点赞
};

export default apiObject;
