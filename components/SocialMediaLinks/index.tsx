import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialMediaLinks = [
  { icon: faInstagram, link: 'https://www.instagram.com/jonika.io' },
  { icon: faTwitter, link: 'https://twitter.com/jonikaio' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/erikajonikaite/' },
]

export const SocialMediaLinks = () => (
  <div>
    {socialMediaLinks.map((socialMediaLink) => (
      <a
        key={socialMediaLink.link} 
        className="pr-4 text-2xl"
        href={socialMediaLink.link}
        rel="noreferrer" 
        target="_blank"
      >
        <FontAwesomeIcon icon={socialMediaLink.icon} />
      </a>
    ))}
  </div>
);
