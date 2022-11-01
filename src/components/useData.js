// 1. 데이터 받아오기 (get)
export const callData = async(url) => {
  try {
    const data = await fetch(url);
    const res = data.json();
    
    return res;
  } catch(err) {
    console.log(err);
  }
}

// 2. 데이터 보내기 (post)
export const sendData = async(url, data) => {
  // fetch option object
  const requestOption = {
    method: 'POST',
    body: data
  }

  try {
    const data = await fetch(url, requestOption);
    const res = data.json();
    
    return res;
  } catch(err) {
    console.log(err);
  }

}