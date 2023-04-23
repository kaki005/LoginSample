window.onload = (event) => {
    const btn = document.querySelector("#submitBtn");

    btn.addEventListener("click", async () => {
        console.log("aaa")
        const password = document.querySelector(".password");
        const username = document.querySelector(".username");
        const result = document.querySelector(".result");
        console.log(password)
        console.log(username)
        const url = `https://tvro24petj.execute-api.ap-northeast-1.amazonaws.com/test?PassWord=${password.value}&UserName=${username.value}`;
        const response = await fetch(url, { method: "get", mode:"" })
        const json = Promise.resolve(response.json()).then(
	(value) => {
		console.log(value);
		result.innerText = value["body"]; 
	},
	(value) => {
	}
         );
    });
}
