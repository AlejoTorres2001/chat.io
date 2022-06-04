# Backend Branch

<div align="center">

![](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)
  
**this is the master branch for the server-side code behind *chat.io***

</div>

Both **Backend** and **Frontend** should be considered as separeted projects each one with their own dependencies. if you are about to contribute to this project or just to play around with the code I suggest to clone each master branches in diffrent folders


## About The Project

the Core concept here revolves around WebSocket, instead of the classic server polling architecture, using an event based communication allows for (almost) real time communication between the server and our clients, who will listen and react to the changes


![](https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/6063b23a21c3b62712152916_s_AF0368E13AD8E872887AAEB8143D3778043FBD15CB873272067D0AD9643E97DA_1615370512983_FdqeSaZS.png)

this image explains dead simple how the backend works

## Stack used 
<img  alt="JavaScript"  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img  alt="Node.js"  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img  alt="MongoDB"  src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />

For authentication I've opted for a ***JWT* strategy**, at the project's current state it does not include a refreshToken functionalilty, logging you out once your access token is rejected by the server.

## Contributing

<div align="center">

![Alt](https://repobeats.axiom.co/api/embed/735a005b42d21617976536b268b913d42e365f63.svg "Repobeats analytics image")

</div>

If you have a suggestion that would make this better, please fork the repo and create a Pull Request. You can also simply [open an issue](https://github.com/AlejoTorres2001/chat.io/issues) with the tag *enhancement*.

Don't forget to **give the project a star ⭐!** 

1. Fork the project

2. Clone the repository

```bash
git clone -b master-backend https://github.com/AlejoTorres2001/code-playground.git
```

3. Create your Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

4. Push to the Branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request








