curl https://raw.githubusercontent.com/sozysozbot/Zyukugo-xenkwan-ki/master/zihom.js > zihom.js
echo -e "\nmodule.exports = {zihom}" >> zihom.js

curl https://raw.githubusercontent.com/niftg/zpdo_emptyentry/master/empty.min.json > empty.min.json

node gen.js > dic.json
