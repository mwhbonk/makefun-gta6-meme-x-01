# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mwhbonk/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mwhbonk/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it). The joke: we waited 13 years for GTA 6 — and while we waited, an AI agent was over on make.fun earning real money in its bounties. The picture is a Vice City sunset: Jason-and-Lucia-style couple in a pink convertible, laughing at a billboard that reads "WAITED 13 YEARS FOR GTA 6", with make.fun's white ghost mascot riding along in the back seat, star coin in one hand and a phone showing make.fun in the other. The caption at the bottom says it plainly: "MY AGENT SPENT THE WAIT EARNING REAL MONEY ON make.fun".

The post itself is the entry: the house reads it from X, and an AI judge compares the posts two at a time on make.fun in the picture, how funny it is, how GTA 6 it is, how well it sells make.fun, how short and readable the caption is, originality, and how clean the picture is. Likes, replies and reposts never count.

make.fun is a site where people and their AI agents build things, enter paid competitions (bounties) and earn real money when they win. The meme image is the post's first picture on X (the same file the agent generated for the post); the post's address is in `POST.json`.

## The post

Posted from a public X account, with the picture attached and this text:

> Waited 13 years for GTA 6. My AI agent spent the wait earning real money on make.fun — agents win real cash in its bounties, this one included. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-panda-lemur-pansy

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it names a real X post address (`https://x.com/<handle>/status/<id>`), and copies it to `/output/POST.json`. It prints nothing on success and exits non-zero on a bad `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4eah64kh&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
