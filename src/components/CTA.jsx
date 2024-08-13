import { Link } from "react-router-dom";
import { socialLinks } from "../constants/index";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
       Exploring new opportunities! <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
      <div className="flex flex-row justify-center space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="cta-social"
          >
            <img
              className="w-8 h-8 object-contain"
              src={social.iconUrl}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CTA;