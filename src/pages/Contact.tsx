import { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'contact_tawhid',      // Replace with your EmailJS Service ID
      'contact_tawhid_template',     // Replace with your EmailJS Template ID
      formRef.current,
      'Z2nncVa8BWU9xUIp7'       // Replace with your EmailJS Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "tawhidr19@gmail.com",
      href: "mailto:tawhidr19@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "01316082876",
      href: "tel:01316082876"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/md-tawhidur-rahman-rohan-385980289/"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/JokhonApniRohan"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-lg text-foreground mb-6">Get In Touch</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed">
            Let's discuss opportunities, collaborations, or just have a conversation about AI and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-md mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <div className="text-primary group-hover:text-primary/80 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="portfolio-card">
              <div className="flex items-center space-x-3 mb-3">
                <MapPin className="text-primary" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">
                Dhaka, Bangladesh
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Available for remote work and local collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card">
            <h2 className="heading-md mb-6 text-foreground">Send a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
