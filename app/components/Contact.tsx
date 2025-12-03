'use client';
import { useState } from 'react';
import { Facebook, Figma, Github, Linkedin, Locate, Mail, PhoneCall, Youtube } from 'lucide-react';
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm();

  const onHCaptchaVerify = (token: string) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    setResult('');

    // Create FormData for Web3Forms
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Append required hidden fields
    formData.append('access_key', 'bd58ddc3-c56f-4a14-bccc-7e3ad1ab83d4');
    formData.append('from_name', 'Softpro');
    formData.append('subject', 'New Submission from Web3Forms');
    formData.append('h-captcha-response', data['h-captcha-response'] || '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const responseData = await res.json();

      if (responseData.success) {
        setResult('Message sent successfully!');
        reset();
      } else {
        setResult(responseData.message || 'Submission failed.');
      }
    } catch (err) {
      setResult('Network or server error.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="z-10 w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Contact <span className="text-[#0ef]">Me</span>
        </h2>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <div className="flex items-center bg-[#0f1a56]/50 p-4 rounded-xl shadow-lg">
            <Locate className="h-16 w-16 p-3 rounded-full border-2 border-[#0ef] bg-cyan-500/20" />
            <div className="ml-4">
              <h5 className="font-semibold text-lg">Address</h5>
              <p className="text-sm">Murugan Kovil Road, Korakallimadu, Batticaloa</p>
            </div>
          </div>

          <div className="flex items-center bg-[#0f1a56]/50 p-4 rounded-xl w-72 shadow-lg">
            <PhoneCall className="h-16 w-16 p-3 rounded-full border-2 border-[#0ef] bg-cyan-500/20" />
            <div className="ml-4">
              <h5 className="font-semibold text-lg">Hotline</h5>
              <p className="text-sm">+94773564988</p>
            </div>
          </div>

          <div className="flex items-center bg-[#0f1a56]/50 p-4 rounded-xl w-72 shadow-lg">
            <Mail className="h-16 w-16 p-3 rounded-full border-2 border-[#0ef] bg-cyan-500/20" />
            <div className="ml-4">
              <h5 className="font-semibold text-lg">Email</h5>
              <p className="text-sm">sivakanth2000s@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center mt-16">
            <form onSubmit={handleSubmit(onSubmit)}
                className="bg-[#0f1a56] p-8 rounded-2xl w-full max-w-md shadow-xl"
            >
                <h4 className="text-center text-2xl mb-6 font-semibold">Contact Form</h4>

                <input type="hidden" name="access_key" value="bd58ddc3-c56f-4a14-bccc-7e3ad1ab83d4" />
                <input type="hidden" name="from_name" value="Softpro" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />

                <input
                type="text"
                name="name"
                required
                placeholder="Your Full Name"
                className="w-full p-3 mb-4 rounded-lg text-black"
                />

                <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 mb-4 rounded-lg text-black"
                />

                <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 mb-4 rounded-lg text-black"
                />

                <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className="w-full p-3 mb-4 rounded-lg text-black"
                ></textarea>

                {/* <div className="h-captcha" data-captcha="true"></div> */}
                <div className='w-full flex items-center justify-center'><HCaptcha sitekey='bd58ddc3-c56f-4a14-bccc-7e3ad1ab83d4' onVerify={ onHCaptchaVerify } reCaptchaCompat={false} /></div>
                <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg mt-2 hover:bg-cyan-400 transition"
                >
                {loading ? "Sending..." : "Send"}
                </button>

                {result && (
                <div className="text-center mt-4 text-sm bg-black/30 p-2 rounded-lg">
                    {result}
                </div>
                )}
            </form>
        </div>

        {/* Social Section */}
        <div className="mt-20 text-center border-b-[3px] border-[#0ef] pb-4">
            <h3 className="text-4xl font-semibold mb-4">Connect With Me</h3>
          <div className="mt-6 flex justify-between items-center">
            <h3 className="hidden sm:block text-3xl font-semibold mb-4 overline text-[#0ef]">SoftPro</h3>
            <div className="flex justify-center items-center gap-2">
                {[
                { icon: <Linkedin className='w-5 h-5' />, link: 'https://www.linkedin.com/in/sivakkanth/' },
                { icon: <Github className='w-5 h-5' />, link: 'https://github.com/Sivakkanth' },
                { icon: <Mail className='w-5 h-5' />, link: 'mailto:sivakanth2000s@gmail.com' },
                { icon: <Youtube className='w-5 h-5' />, link: 'https://www.youtube.com/@Sivakkanth' },
                { icon: <img className="bg-cyan-400 rounded-full" src="..\Image\fiverr.png" alt="fiverrImg"/>, link: 'https://www.fiverr.com/asivabkanth' },
                { icon: <Figma className='w-5 h-5' />, link: 'https://www.figma.com/@asivabkanth' },
                { icon: <Facebook className='w-5 h-5' />, link: 'https://web.facebook.com/siva.kanth.1238' }
                ].map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="
                    border-2
                    border-cyan-400 
                    text-cyan-400 
                    w-8 
                    h-8 
                    rounded-full 
                    flex 
                    justify-center 
                    items-center 
                    text-xl
                    hover:shadow-md
                    hover:shadow-cyan-400 
                    hover:scale-110
                    transition
                    "
                >
                    {item.icon}
                </a>
                ))}
            </div>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-12 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Sivakkanth Karunakaran. All rights reserved.</p>
          <p>This portfolio is hosted on Vercel.</p>
        </div>
      </div>
    </section>
  );
}