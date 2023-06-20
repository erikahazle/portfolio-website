import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialMediaLinks = [
  { icon: faInstagram, link: 'https://www.instagram.com/erikahazlewood' },
  { icon: faTwitter, link: 'https://twitter.com/erikahazle' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/erikahazlewood/' },
]

export const SocialMediaLinks = () => (
  <div>
    {socialMediaLinks.map((socialMediaLink) => (
      <a
        key={socialMediaLink.link} 
        className="pr-4 text-2xl text-gray-900"
        href={socialMediaLink.link}
        rel="noreferrer" 
        target="_blank"
      >
        <FontAwesomeIcon icon={socialMediaLink.icon} />
      </a>
    ))}
  </div>
);
