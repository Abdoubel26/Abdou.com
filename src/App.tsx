
import pic from './assets/propic.png'

function App() {
  
  return (
    <>
    <section className="profile">
      <img src={pic} alt="Profile photo" id="profile-pic" title="Abdou Belounis" />
        <p>Space Exploration Advocate, Indie Hacker</p>
    </section>
<hr></hr>
    
    <section className="about">
       <h3>About Me</h3>

<p>
    Let's connect and explore the future together! 
    <a href="mailto:xenom442025@outlook.com?subject=XXX&body=Hello, Abdou Belounis, I’d love to..."  style={{color: "#ff5733", textDecoration: "none", fontWeight: "bold"}}>
<span className="span">Reach out here</span></a>
</p>
    Follow me for more updates:  
    <a href="https://x.com/abdou_belounis" style={{color: "#c2dcc2", textDecoration: "none", fontWeight: "bold"}}> <span className="span">X (Twitter)</span> </a>|  
    <a href="https://instagram.com/abdou_belounis26" style={{color: "#c2dcc2", textDecoration: "none", fontWeight: "bold"}}> <span className='span' >Instagram</span> </a> |
    <a href="https://github.com/Abdoubel26" style={{color: "#c2dcc2", textDecoration: "none", fontWeight: "bold"}}> <span className='span'> Github </span></a>
</section>


<footer>
  <p>© 2025 Abdou Belounis. Made with ☕ & curiosity.</p>
</footer>


    </>
  )
}

export default App
