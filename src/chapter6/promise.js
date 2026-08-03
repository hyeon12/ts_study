"use strict";
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(404);
        // resolve("success");
    }, 3000);
});
promise.then((response) => {
    // response는 number 타입
    console.log(response);
});
promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    }
    else if (typeof error === 'number') {
        switch (error) {
            case 404:
                console.log("리소스를 찾을 수 없습니다.");
                break;
            case 500:
                console.log("서버 내부 오류입니다.");
                break;
            default:
                console.log(`알 수 없는 에러 코드: ${error}`);
        }
    }
});
