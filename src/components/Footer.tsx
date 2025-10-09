import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">QUADRO</h3>
            <p className="opacity-90 leading-relaxed">
              Spain is famous for the tradition of gathering in large and friendly companies. 
              Quadro shares these values, creating an atmosphere filled with joy and hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+998781131338" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Phone className="h-5 w-5" />
                <span>+998 78 113 13 38</span>
              </a>
              <a href="mailto:info@quadro.uz" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Mail className="h-5 w-5" />
                <span>info@quadro.uz</span>
              </a>
              <div className="flex items-center gap-3 opacity-90">
                <Clock className="h-5 w-5" />
                <span>Daily: 9:00 - 00:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Visit Us</h4>
            <div className="flex items-start gap-3 opacity-90">
              <MapPin className="h-5 w-5 mt-1" />
              <address className="not-italic leading-relaxed">
                Tashkent, Uzbekistan<br />
                Premium Spanish Restaurant
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
          <p>© 2024 Quadro Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
