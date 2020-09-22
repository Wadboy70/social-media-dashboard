import { ReactComponent as Facebook } from '../assets/icon-facebook.svg';
import { ReactComponent as Instagram } from '../assets/icon-instagram.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import { ReactComponent as Youtube } from '../assets/icon-youtube.svg';

const PLATFORMS = {
    FB:{
        name: 'Facebook',
        metrics: [
            {
                name: 'Page Views',
                count: 87,
                change: 3
            },
            {
                name: 'Likes',
                count: '52',
                change: -2
            }
        ],
        Logo: Facebook
    },
    IG:{
        name: 'Instagram',
        metrics: [
            {
                name: 'Likes',
                count: 5462,
                change: 2257
            },
            {
                name: 'Profile Views',
                count: '52k',
                change: 1375
            }
        ],
        Logo: Instagram
    },
    TW:{
        name: 'Twitter',
        metrics: [
            {
                name: 'Retweets',
                count: 117,
                change: 303
            },
            {
                name: 'Likes',
                count: 507,
                change: 553
            }
        ],
        Logo: Twitter
    },
    YT:{
        name: 'YouTube',
        metrics: [
            {
                name: 'Likes',
                count: 107,
                change: -19
            },
            {
                name: 'Total Views',
                count: 1407,
                change: -12
            }
        ],
        Logo: Youtube
    }
};

export default PLATFORMS;