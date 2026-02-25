<a name="readme-top"></a>

<div align="center">
  <img src="public/logo-dark.png" alt="logo" width="140"  height="auto" />

  <br/>
</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Login](#login)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [📝 License](#license)

# 📖 KidLingo Translation Service - Frontend <a name="about-project"></a>

This repository contains the frontend for the KidLingo translation platform, built with Next.js and React. The platform allows authenticated users to translate product information and customer service tickets between French and English in real-time using an external AI translation service (Hugging Face Inference API). The frontend includes user registration and login features with JWT authentication, a form to submit translation requests, and a real-time display of translated text. The app is fully dockerized for simple deployment.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://www.tailwindcss.com/">Tailwind CSS</a></li>
    <li><a href="https://www.docker.com/">Docker</a></li>
  </ul>

### Key Features <a name="key-features"></a>

- **User authentication with JWT**

- **Translation form with real-time display of results**

- **Choice of translation direction (FR → EN or EN → FR)**

- **Secure access to translation features via JWT**

- **Fully dockerized for deployment**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](link to deployed project)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/codehass/talait-translate-service-frontend.git
```

### Install

Install this project with:

```sh
  cd talait-translate-service-frontend
  npm install
```

create `.env` file and add your environment variables. You can copy `.env.example` as a template.

```sh
  cp .env.example .env
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

👤 **Hassan El Ouardy**

- GitHub: [@codehass](https://github.com/codehass)
- Twitter: [@hassanelourdy](https://twitter.com/hassanelourdy)
- LinkedIn: [@hassanelourdy](https://www.linkedin.com/in/hassanelouardy/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Support for additional translation languages**
- **User dashboard to view translation history**
- **Dark mode toggle**
- **Accessibility improvements**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Join us in supporting our project to improve cross-lingual communication with AI translations! Your help makes a big difference in bridging language gaps effortlessly. Let's work together to bring positive change to language accessibility!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
