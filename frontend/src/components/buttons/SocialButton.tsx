import { IconType } from 'react-icons';

interface SocialAnchorProps {
  href: string;
  icon: IconType;

}


export const SocialAnchor : React.FC<SocialAnchorProps> = ({href , icon : Icon}) => {
    return (
        <a
            href={href}
            target='_blank'
            className={` rounded-full p-2.5 bg-customGray text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none text-center `}>
            <Icon/>
        </a>
    );
};

export default SocialAnchor;
