function Home() {return <h1>Home Page</h1>;}
function About() {return <h1>About Page</h1>;}
function Contact() {return <h1>Contact Page</h1>;}
 
function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="Home" element ={<Home />} />
        <Route path="About" element ={<About />} />
        <Route path="Contact" element ={<Contact />} />

      </Routes>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    <form>
      <input type="name" name="name" value={form.name} onChange={handleChange} placeholder='Enter Name' />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Enter Email' />
      <button type= "submit">Login</button>
    </form>
    </div>
    
  )
}

  export default Contact;