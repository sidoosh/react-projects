import React from 'react';
import '../css/header-banner.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';
const Entry = () => {
	return (
		<div className="sap-banner__container">
			<CSSTransitionGroup 
				component="ul"
				className="sap-banner__container--home sap-banner--carousel"
				transitionName="sap-slider"
				transitionEnterTimeout={2000}
				transitionLeaveTimeout={2000}
			>
				<li className="sap-banner--slide" >
					<h2 className="sap-banner--headline">Discover, Try, Buy, and Manage</h2>
					<p className="sap-banner--tagline">Discover, Try, Buy, and Manage</p>
				</li>
				<li className="sap-banner--slide">
					<div className="sap-banner--spotlight-banner-wrapper">
						<div className="sap-banner--spotlight-banner">In the spotlight</div>
					</div>
					<div className="sap-banner--feature-image"><img src="https://d2uars7xkdmztq.cloudfront.net/channel_custom_style_resources/img270954028288401349?d8130d48305d18a8930bbd9a3eb86908" /></div>
					<h2 className="sap-banner-feature--headline">Spotlight: In Mind Cloud CPQ Express</h2>
					<p className="sap-banner-feature--tagline">Spotlight: In Mind Cloud CPQ Express</p>
					<a className="sap-banner-feature--learn-more" href="https://www.sapappcenter.com/apps/3973?url_id=banner-Hybris-InMindCloudCPQ">Free Trial</a>
				</li>
			</CSSTransitionGroup>
		</div>
	)
}

export default Entry;
