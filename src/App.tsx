import { useState } from "react"
import { marked } from "marked";
function App() {

  const text = "# GoEco\n\n![Alt Website preview][image-preview]\n## Introduction \nGoEco is a project made for competition [Mini Hackaton][mini-hackaton]. Its main purpose is to show the world how bad are climate changes. GoEco allows you to check your carbon footprint. You can try it on [goeco.vercel.app][goceo-link]\n\n## Contents\n\n- [Contributing](#-contributing)\n- [Code of Conduct](#-code-of-conduct)\n- [Technologies](#-technologies)\n- [Additional information](#-additional-information)\n- [License](#-license)\n\n## 👏 Contributing \n\n> To see all info about contributing go to [CONTRIBUTING.md][contributing]\n\n## 💖 Code of Conduct          \n\nGoEco has adopted a **Code of Conduct** that we expect project participants to adhere to. Please read the [full text][code-of-conduct] so that you can understand what actions will and will not be tolerated.\n\n## 🖥️ Technologies\n\nIn this project we used vast amount of modern `technologies` such as:\n\n- [Next.js][nextjs] and [React][react]\n- [Typescript][typescript]\n- [Tailwind CSS][tailwind]\n- [React Three Fiber][react-three-fiber] and [Three.js][threejs]\n- [Postcss][postcss]\n\n## 📖 Additional information\n\n### 📋 Requirements\n\n[Node.js][node] and [NPM][npm]\n\n### ⚙️ Packages Installation\n\n```shell\nnpm i\n```\n\n### 🚀 Starting the app \n\n```shell\nnpm run dev\n```\n\n### 🔗 Cloning the repository\n\n```shell\ngit clone https://github.com/janekskr/GoEco.git\n```\n\n## 📄 License \n\nGoEco is [MIT][mit] licensed, as found in the [LICENSE][license] file.\n\n\n[mit]: https://opensource.org/license/mit/\n[license]: https://github.com/janekskr/GoEco/blob/master/LICENSE\n[node]: https://nodejs.org/en\n[npm]: https://www.npmjs.com/\n[postcss]: https://postcss.org/\n[react-three-fiber]: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction\n[contributing]: https://github.com/janekskr/GoEco/blob/master/CONTRIBUTING.md\n[mini-hackaton]: https://nowaakademia.org/mini-hackathon/mini-hackathon-edycja-iii/\n[image-preview]: https://raw.githubusercontent.com/janekskr/GoEco/master/public/preview.png\n[goceo-link]: https://goeco.vercel.app\n[nextjs]: https://nextjs.org/\n[react]: https://react.dev/\n[typescript]: https://www.typescriptlang.org/\n[tailwind]: https://tailwindcss.com\n[threejs]: https://threejs.org/\n[code-of-conduct]: https://github.com/janekskr/GoEco/blob/master/CODE_OF_CONDUCT.md"

  const [content, setContent] = useState<string>(text)

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }  

  return (
    <main>
      <textarea autoComplete="none" name="editor" id="editor" value={content} onChange={handleTextChange} spellCheck={false } aria-multiline={true}>
      </textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(content, {headerIds: false, mangle: false})}}>    
      </div>
    </main>
  )
}

export default App
