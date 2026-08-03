const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        reject(404);
        // resolve("success");
    }, 300);
});

promise.then((response) => {
    // response는 string 타입으로 설정
    console.log(response);
});

/**
 * reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의할 수 없음.
 * unknown 타입으로 고정되어 있기 때문에 catch 메서드에서 사용하려면 타입 좁히기를 통해 안전하게 사용하는 것을 권장!
 */
promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    } else if (typeof error === 'number') {
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