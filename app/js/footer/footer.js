import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="https://www.github.com/bmahlbrand">
                        <img src="app/img/mark-github-128.png" width="128" height="128" />
                    </Link>

                    <Link to="https://www.youtube.com/channel/UCuKxH818XzVCM7gbwB_TQBw">
                        <img src="app/img/youtube.png" width="128" height="128" />
                    </Link>

                    <Link to="https://scholar.google.com/citations?user=ob6j60IAAAAJ&hl=en">
                        <img src="app/img/ghat.png" width="128" height="128" />
                    </Link>

                    <Link to="https://www.linkedin.com/in/bmahlbrand">
                        <img src="app/img/linkedin-128.png" width="128" height="128" />
                    </Link>

                    <Link to="https://twitter.com/bmahlbrand">
                        <img src="app/img/twitter-icon.png" width="128" height="128" />
                    </Link>

                </div>
                <p class="text-center">
                    powered by NodeJS, Express, AngularJS, Bootstrap <Link to="https://github.com/bmahlbrand/bmahlbrand.github.io">[source]</Link>
                </p>
                <p class="text-center">all rights reserved Benjamin Ahlbrand (bmahlbrand at gmail dot com) 2017</p>
            </div>
        );
    };
};
