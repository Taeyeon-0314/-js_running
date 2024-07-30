const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    return new Promise((success, fail) => {
        setTimeout(() => {
            if (url === API_URL) {
                success("데이터를 가져왔어요!!")
            } else {
                fail(new Error("데이터를 못가져왔어요!"))
            }
        }, 3000);
    });
}

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})


getData(WRONG_URL).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});