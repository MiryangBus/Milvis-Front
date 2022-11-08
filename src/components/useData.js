
// 1. 데이터 받아오기 (get)
export const callData = async(url) => {
  try {
    const data = await fetch(url);
    const res = data.json();
    console.log("데이터받기",res)
    return res;
  } catch(err) {
    console.log(err);
  }
}

// 2. 데이터 보내기 (post)
export const sendData = async(url, data) => {
  console.log("데이터보내기함수")
  // fetch option object
  const requestOption = {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data,
    credentials: 'include',
    Origin: "http://localhost:3000",
    AccessControlRequestHeaders: 'Content-Type'
  }

  try {
    const data = await fetch(url, requestOption);
    console.log(data);
    // const res = data.json();
    
    // return res;
  } catch(err) {
    console.log(err);
  }
}