import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import ContactImage from '@/asserts/contact.svg';
import MeRB from '@/asserts/icon_rb.png';

const socials = [
  {
    name: 'Email',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=naveenkumarkohli06@gmail.com',
    icon: '/Naveen_Portfolio/images/gmail.svg',
    color: 'bg-red-100 text-red-600 hover:bg-red-200',
    iconClass: 'w-5 h-5',
    target: '_blank'
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/naveen.msd.336',
    icon: '/Naveen_Portfolio/images/fb.svg',
    color: 'bg-blue-600 text-white hover:bg-blue-700',
    iconClass: 'w-5 h-5',
    target: '_blank'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/koyyana-naveen-kumar-220b68255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: '/Naveen_Portfolio/images/linkedin.svg',
    color: 'bg-blue-700 text-white hover:bg-blue-800',
    iconClass: 'w-5 h-5',
    target: '_blank'
  },
  {
    name: 'Twitter',
    link: 'https://x.com/Crazy_Killer18',
    icon: '/Naveen_Portfolio/images/twitter.svg',
    color: 'bg-black text-white hover:bg-gray-800',
    iconClass: 'w-5 h-5',
    target: '_blank'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/crazy_killer_1818?igsh=MWZrYWJuaGt3dG9mMA==',
    icon: '/Naveen_Portfolio/images/insta.svg',
    color: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600',
    iconClass: 'w-5 h-5',
    target: '_blank'
  }
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map the input names to match both form state and EmailJS template
    const fieldName = name === 'from_name' ? 'name' : 
                     name === 'from_email' ? 'email' : name;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS with your public key
      if (!window.emailjs || !window.emailjs.init) {
        emailjs.init('ZNshuwGV6tsmegBdH');
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        'service_2z3mx8f',
        'template_yctih25',
        templateParams,
        'ZNshuwGV6tsmegBdH'
      );
      
      // Show success message
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      let errorMessage = 'Failed to send message';
      
      try {
        // Try to parse the error message if it's a JSON string
        const errorData = JSON.parse(error.message);
        errorMessage = errorData.message || errorData.detail || errorMessage;
      } catch (e) {
        // If not JSON, use the message as is
        errorMessage = error.message || errorMessage;
      }
      
      console.error('Error details:', {
        error,
        message: errorMessage,
        stack: error.stack
      });
      
      toast.error(`Failed to send message: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full py-10 px-4 md:px-8" id='contact'>
      <h1 className='flex justify-center items-center w-full my-5 text-3xl font-bold'>
        Contact 
        <img src={ContactImage} alt='contact' className='w-14 h-14 mx-5' />
      </h1>
      <div className='w-full max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8'>

        {/* Left Panel */}
        <div className='group w-full sm:w-[45%] min-w-[300px] border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='w-full h-52 flex justify-center contactImage'>
            <img src={MeRB} alt='contact' className='h-[90%] m-3 p-3 object-contain bg-black/40 rounded-xl group-hover:scale-105 transition-all'/>
          </div>
          <div className='flex justify-center items-center flex-col mt-5'>
            <h2 className='text-xl font-bold'>Naveen Kumar Koyyana</h2>
            <div className='m-3 w-[90%] md:w-[75%] text-center'>
              Thank you for taking the time to explore my portfolio! Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.

              Feel free to reach out using the contact form below. I make it a priority to respond to all inquiries promptly, so you can expect to hear back from me soon.
            </div>
            <div className='w-full my-3 px-4'>
              <div className='flex flex-nowrap justify-center items-center gap-3 overflow-x-auto py-2 px-1'>
                {socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target={social.target || '_blank'}
                    rel='noreferrer noopener'
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${social.color} hover:opacity-90 transition-all hover:scale-110`}
                    title={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className='w-6 h-6 object-contain'
                      onError={(e) => {
                        console.error(`Failed to load image: ${social.icon}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <form 
          ref={form}
          className="group w-full sm:w-[45%] min-w-[300px] border border-gray-200 rounded-2xl overflow-hidden p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
          onSubmit={handleSubmit}
        >
          <label className="w-full mb-3">
            <span className="block font-semibold mb-1">Name</span>
            <input
              type="text"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
              disabled={loading}
            />
          </label>
          
          <label className="w-full mb-3">
            <span className="block font-semibold mb-1">Email</span>
            <input
              type="email"
              name="from_email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="your@email.com"
              disabled={loading}
            />
          </label>
          
          <label className="w-full mb-3">
            <span className="block font-semibold mb-1">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Subject"
              disabled={loading}
            />
          </label>
          
          <label className="w-full mb-4">
            <span className="block font-semibold mb-1">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Type your message here..."
              disabled={loading}
            ></textarea>
          </label>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition flex items-center justify-center w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;