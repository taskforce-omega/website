# <img src="assets/tfo-emoji.png" alt="TFO" width="36" style="vertical-align:middle"> Task Force Omega - Website

![Netlify](https://img.shields.io/netlify/fcefeec0-9041-4f90-b165-874d6c4bc8c3?style=flat-square&label=Netlify&logo=netlify)
![Last Commit](https://img.shields.io/github/last-commit/taskforce-omega/website?style=flat-square&logo=github)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Netlify Functions](https://img.shields.io/badge/Netlify_Functions-00C7B7?style=flat-square&logo=netlify&logoColor=white)

> Official website for Task Force Omega — an international Arma 3 semi-milsim unit.  
> Built with vanilla HTML/CSS/JS, deployed on Netlify with serverless functions for Discord integration.

**[taskforceomega.eu](https://taskforceomega.eu)**

---

## Stack

| Layer         | Tech                         |
|---------------|------------------------------|
| Frontend      | HTML5, CSS3, Vanilla JS      |
| Fonts         | Space Grotesk (Google Fonts) |
| Icons         | Font Awesome 6               |
| Hosting       | Netlify                      |
| Functions     | Netlify Serverless (Node.js) |
| Notifications | Discord Webhooks             |

---

## Project structure

~~~
taskforceomega/
├── assets/                  # Logo, icons, OG images
├── flags/                   # Country flag icons
├── gallery/                 # Gallery images
├── imgs/                    # Misc images
│
├── netlify/
│   └── functions/
│       └── signup.js        # Signup form → Discord webhook
│
├── index.html               # Home
├── signup.html              # Recruitment form
├── join-us.html             # How to join
├── gallery.html             # Media gallery
├── donate.html              # Donations
├── shop.html                # Merch
├── legal.html               # Legal notices
├── 404.html                 # Custom 404
├── styles.css               # Global stylesheet
├── robots.txt
└── sitemap.xml
~~~

---

## Netlify Functions

### `signup.js`

Handles POST requests from the recruitment form and forwards a formatted embed to a Discord channel via webhook.

**Endpoint:** `/.netlify/functions/signup`  
**Method:** `POST`  
**Body:** JSON — all form fields from `signup.html`

---

## Environment Variables

Configured in the Netlify dashboard. Never commit `.env` files.

| Variable                 | Description                                        |
|--------------------------|----------------------------------------------------|
| `DISCORD_WEBHOOK_SIGNUP` | Discord webhook URL for signup embed notifications |

---

## Deployment

Auto-deployed on every push to `main` via Netlify CI/CD.

~~~bash
git add .
git commit -m "your message"
git push
~~~
---

## Community

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/FuwCrJF)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@taskforceomega)
[![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=flat-square&logo=twitch&logoColor=white)](https://twitch.tv/taskforceomega)
[![Steam](https://img.shields.io/badge/Steam-000000?style=flat-square&logo=steam&logoColor=white)](https://steamcommunity.com/groups/taskforceomega)
