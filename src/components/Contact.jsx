import { useRef } from 'react'
import emailjs from'emailjs-com'

const Contact=()=>{
    const form=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendform("service_a2yv33i","template_srmsd0c",form.current,"ljiS_ELmtapfkOODd")
        .then(()=>{
        alert("Message Sent")
        },(error)=>{console.error(error.text)})
        e.target.reset()
}
    return (
    <section className="container p-10 bg-blue-100 text-center" id="About">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Contact Me
            </h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
                <input type="text" Name="uname"  placeholder="Enter Your Name" required className="p-2 border rounded"/>
                <input type="email" Name="uemail" placeholder="name@example.com" required className="p-2 border rounded"/>
                <textarea name="message" rows="4" cols="50" placeholder="Your Message"/>
                <button type="submit" className="bg-blue-500 text-white py-2">Send</button>
            </form>
            
        </div>
    </section>
)}
export default Contact;