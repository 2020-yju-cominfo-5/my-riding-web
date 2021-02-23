const getRegPatterns = (name) => {
  const patterns = {
    id: /^[a-z]+[a-z0-9]{5,15}$/g,
    password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/,
    nickName: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,15}$/,
  };
  return name ? patterns[name] : patterns;
};

export default getRegPatterns;
