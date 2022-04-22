import './App.css'

function App() {

  let btns = [{ btn: "Services", url: "##" }, { btn: "Projects", url: "##" }, { btn: "About", url: "##" }]
  return (
    <div>

      <div className="nav" id="nav">


        <div className="logo" >
          <img src="https://c8.alamy.com/comp/2B7WEJY/c-letter-logo-with-wings-creative-wing-letter-c-logo-icon-design-vector-illustration-2B7WEJY.jpg" className="c-logo"></img>
        </div>

        <div className='link'>
          {btns.map((e) => {
            return <a href={e.url} className="link-a">{e.btn}</a>
          })}
        </div>

        <div className="btn">
          <button className="contact">Contact</button>
        </div>


      </div>

    </div>
  )
}

export default App
