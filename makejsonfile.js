const { readdir, writeFile } = require("fs");



const 월드컵이름 = "라면월드컵";



readdir(`./${월드컵이름}`, (err, list) => {
  if (err) console.error("폴더를 찾을수 없음");
  var text = `[ "${list.join("\", \"")}" ]`;
  writeFile(`./list/${월드컵이름}.json`, text, (err) => {
    if (err) console.error("파일 쓰는 중 오류 발생");
    console.log(`${월드컵이름}.json 파일 생성 완료!`);
  });
});